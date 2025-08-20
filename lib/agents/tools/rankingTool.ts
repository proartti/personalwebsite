import { OpenAIEmbeddings } from '@langchain/openai'
import { cosineSimilarity } from 'langchain/util/math'

const embeddings = new OpenAIEmbeddings()

type Highlighted = { original: string; highlight: string }

export class RankingTool {
	async rank(jobDescription: string, highlighted: Highlighted[]) {
		if (!highlighted.length) return []
		const jobVec = await embeddings.embedQuery(jobDescription)
		const qualVecs = await embeddings.embedDocuments(highlighted.map((h) => h.original))

		const scored = highlighted.map((h, i) => {
			const docVec = qualVecs[i]
			let score: any = docVec ? cosineSimilarity([jobVec], [docVec]) : 0
			// Coerce to finite number
			if (typeof score !== 'number' || !Number.isFinite(score)) {
				score = 0
			}
			return { ...h, score }
		})

		scored.sort((a, b) => b.score - a.score)

		return scored.map((s) => {
			const numeric = typeof s.score === 'number' && Number.isFinite(s.score) ? s.score : 0
			return {
				original: s.original,
				highlight: s.highlight,
				score: Math.round(numeric * 10000) / 10000, // 4 decimals
			}
		})
	}
}
