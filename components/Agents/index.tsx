'use client'

import React from 'react'

import Section from '../Section'

import './styles.scss'

const Agents = () => {
	const handleClick = async () => {
		try {
			const response = await fetch('/api/qa', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query: 'Have you worked with React Native?' }),
			})
			console.log('QA Response:', await response.json())
		} catch (error) {
			console.error('QA Error:', error)
		}
	}

	const handleClick2 = async () => {
		try {
			const response = await fetch('/api/qualify', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					jobDescription: 'Looking for React Native engineer with fintech experience.',
				}),
			})
			console.log('Qualify Response:', await response.json())
		} catch (error) {
			console.error('Qualify Error:', error)
		}
	}

	return (
		<Section id="agents">
			<div className="edge-top">
				<img src="images/edge-top.svg" />
			</div>
			<div className="edge-bottom">
				<img src="images/edge-bottom.svg" />
			</div>

			<div className="container mx-auto max-w-screen-lg">
				<div className="row">
					<div className="col">
						<button className="rounded bg-blue-500 px-4 py-2 text-white" onClick={handleClick}>
							Send API Request
						</button>
						<button className="rounded bg-green-500 px-4 py-2 text-white" onClick={handleClick2}>
							Send API 2 Request
						</button>
					</div>
				</div>
			</div>

			<div className="explorer">
				<img src="images/goo-explorer.svg" />
			</div>
		</Section>
	)
}

export default Agents
