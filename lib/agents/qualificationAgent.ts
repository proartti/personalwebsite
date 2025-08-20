import { HighlightTool } from './tools/highlightTool'
import { RankingTool } from './tools/rankingTool'
import { loadVectorStore } from '@/lib/retrieval/qaChain'

export class QualificationAgent {
	private highlightTool = new HighlightTool()
	private rankingTool = new RankingTool()

	async matchQualifications(jobDescription: string) {
		// Pull candidate qualification snippets (top N similar chunks from vector store)
		const store = await loadVectorStore()
		const docs = await store.similaritySearch(jobDescription, 12)
		const baseQualifications = docs.map((d) => d.pageContent)
		const highlighted = await this.highlightTool.highlight(jobDescription, baseQualifications)
		const ranked = await this.rankingTool.rank(jobDescription, highlighted)
		return ranked.slice(0, 8)
	}
}
