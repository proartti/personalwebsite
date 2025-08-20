import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { PromptTemplate } from '@langchain/core/prompts'
import { RunnableSequence } from '@langchain/core/runnables'
import { StringOutputParser } from '@langchain/core/output_parsers'

let vectorStorePromise: Promise<MemoryVectorStore> | null = null

export async function loadVectorStore() {
	if (!vectorStorePromise) {
		vectorStorePromise = (async () => {
			// TODO: Replace with persisted store (e.g., Chroma, Supabase, Pinecone)
			const embeddings = new OpenAIEmbeddings()
			const docs = await loadDocuments()
			return MemoryVectorStore.fromDocuments(docs, embeddings)
		})()
	}
	return vectorStorePromise
}

async function loadDocuments() {
	// TODO: Load from filesystem /data or CMS. Placeholder examples:
	const cvEntries = [
		{
			pageContent:
				'Led React Native development for fintech mobile app integrating real-time payments.',
			metadata: { source: 'cv', tag: 'react-native, fintech' },
		},
		{
			pageContent:
				'Implemented GraphQL APIs and Next.js frontend for portfolio analytics dashboard.',
			metadata: { source: 'cv', tag: 'nextjs, graphql' },
		},
	]
	return cvEntries
}

const prompt = new PromptTemplate({
	template: `You answer questions about the candidate's CV & portfolio.
If the answer is not clearly contained in the context, say you do not have that info.

Question:
{question}

Context:
{context}

Answer (concise, factual, no fabrication):`,
	inputVariables: ['question', 'context'],
})

const llm = new ChatOpenAI({ model: 'gpt-4o-mini', temperature: 0 })

export async function getRetrievalQAChain(store: MemoryVectorStore) {
	const retriever = store.asRetriever(6)

	async function invoke(input: { question: string }) {
		const { question } = input
		if (!question) throw new Error('question required')

		// Retrieve
		const docs = await retriever.getRelevantDocuments(question)
		const context = docs.map((d) => d.pageContent).join('\n---\n') || 'NO RELEVANT CONTEXT'

		// Build prompt
		const formatted = await prompt.format({ question, context })

		// Call model
		const res = await llm.invoke(formatted)

		// Normalize content
		const text =
			typeof res.content === 'string'
				? res.content
				: Array.isArray(res.content)
					? res.content.map((c: any) => (typeof c === 'string' ? c : (c?.text ?? ''))).join(' ')
					: JSON.stringify(res.content)

		return {
			text: text.trim(),
			sources: docs, // pass entire docs so caller can surface metadata
		}
	}

	return { invoke }
}
