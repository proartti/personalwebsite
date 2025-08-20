import { NextResponse } from 'next/server'
import { loadVectorStore, getRetrievalQAChain } from '@/lib/retrieval/qaChain'

function jsonError(status: number, message: string, extra: any = {}) {
	return NextResponse.json({ error: message, ...extra }, { status })
}

export async function POST(req: Request) {
	if (!process.env.OPENAI_API_KEY) {
		return jsonError(500, 'Missing OPENAI_API_KEY environment variable')
	}
	const body = await req.json()
	const query: string | undefined = body?.query
	if (!query || typeof query !== 'string') {
		return jsonError(400, 'query (string) required')
	}
	try {
		const store = await loadVectorStore()
		const chain = await getRetrievalQAChain(store)
		const answer = await chain.invoke({ question: query })
		const sources = answer.sources.map((d: any) => ({
			content: d.pageContent,
			metadata: d.metadata || {},
		}))
		return NextResponse.json({ query, answer: { text: answer.text, sources } })
	} catch (err: any) {
		console.error('QA route error', err)
		return jsonError(500, 'Failed to process QA request', { details: err?.message })
	}
}

export async function GET() {
	return jsonError(405, 'Method Not Allowed. Use POST.')
}
