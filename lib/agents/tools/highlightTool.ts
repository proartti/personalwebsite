import { ChatOpenAI } from '@langchain/openai'
import { PromptTemplate } from '@langchain/core/prompts'

const llm = new ChatOpenAI({ model: 'gpt-4o-mini', temperature: 0 })

const prompt = new PromptTemplate({
	template: `You extract why each candidate snippet supports the job description.

JOB DESCRIPTION:
{job}

SNIPPETS (indexed):
{snippets}

Return ONLY valid JSON array. Each element:
{{
  "original": "verbatim snippet text",
  "highlight": "5-12 word emphasized relevance",
  "reason": "concise (<=20 words) explanation tying snippet to job"
}}

Rules:
- Do not invent info not present in original snippet.
- Preserve technical terms.
- Output ONLY JSON (no markdown, no commentary).`,
	inputVariables: ['job', 'snippets'],
})

type HighlightResult = {
	original: string
	highlight: string
	reason: string
}

export class HighlightTool {
	async highlight(jobDescription: string, qualifications: string[]) {
		if (!qualifications.length) return []
		const formatted = await prompt.format({
			job: jobDescription,
			snippets: qualifications.map((q, i) => `[${i}] ${q}`).join('\n\n'),
		})
		const res = await llm.invoke(formatted)

		const raw =
			typeof res.content === 'string'
				? res.content
				: Array.isArray(res.content)
					? res.content.map((c: any) => (typeof c === 'string' ? c : (c?.text ?? ''))).join('\n')
					: JSON.stringify(res.content)

		const parsed = this.safeParseArray(raw)

		// Fallback if model did not follow schema
		if (!parsed.length) {
			return qualifications.map<HighlightResult>((q) => ({
				original: q,
				highlight: q.slice(0, 60),
				reason: 'Relevant experience',
			}))
		}
		return parsed
	}

	private safeParseArray(text: string): HighlightResult[] {
		try {
			// Extract first JSON array if extra text leaked
			const match = text.match(/\[[\s\S]*\]/)
			if (!match) return []
			const data = JSON.parse(match[0])
			if (!Array.isArray(data)) return []
			return data
				.filter((o) => o && typeof o.original === 'string' && typeof o.highlight === 'string')
				.map((o) => ({
					original: o.original,
					highlight: o.highlight,
					reason: typeof o.reason === 'string' ? o.reason : o.highlight,
				}))
		} catch {
			return []
		}
	}
}
