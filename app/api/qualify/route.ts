import { NextResponse } from 'next/server'
import { QualificationAgent } from '@/lib/agents/qualificationAgent'

function jsonError(status: number, message: string, extra: any = {}) {
	return NextResponse.json({ error: message, ...extra }, { status })
}

export async function POST(req: Request) {
	if (!process.env.OPENAI_API_KEY) {
		return jsonError(500, 'Missing OPENAI_API_KEY environment variable')
	}
	const body = await req.json()
	console.log('Request body:', body)
	const jobDescription: string | undefined = body?.jobDescription
	if (!jobDescription || typeof jobDescription !== 'string') {
		return jsonError(400, 'jobDescription (string) required')
	}
	try {
		const agent = new QualificationAgent()
		const matches = await agent.matchQualifications(jobDescription)
		return NextResponse.json({ jobDescription, matches })
	} catch (err: any) {
		console.error('Qualify route error', err)
		return jsonError(500, 'Failed to process qualification request', { details: err?.message })
	}
}

export async function GET() {
	return jsonError(405, 'Method Not Allowed. Use POST.')
}
