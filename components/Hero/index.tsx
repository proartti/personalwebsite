'use client'
import React, { useState } from 'react'
import { BiSend } from 'react-icons/bi'
import { useRive } from '@rive-app/react-webgl2'

// @ts-ignore -- Stylesheet modules are handled by the application's bundler.
import './styles.scss'

type ChatBubble = { text: string; type: 'user' | 'bot' }

const initialGreeting: ChatBubble = {
	text: "Hi, I'm Tiago Donatti. How can I assist you today?",
	type: 'bot',
}

const Hero = () => {
	const { RiveComponent } = useRive({
		src: '/rive_files/majortom.riv',
		stateMachine: 'State Machine 1',
		autoplay: true,
	})

	const [inputValue, setInputValue] = useState('')

	// qa chat bubbles state data
	const [chatBubbles, setChatBubbles] = useState<ChatBubble[]>([initialGreeting])

	const handleQuery = async () => {
		// Prevent empty submissions
		if (!inputValue.trim()) return

		try {
			const response = await fetch('/api/qa', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query: inputValue }),
			})
			if (!response.ok) {
				console.error('QA Error: non-OK status', response.status)
				return
			}
			const data = await response.json()
			console.log('QA Response:', data)
			// Update chat bubbles with user query and bot response
			setChatBubbles((prev) => [...prev, { text: data?.answer?.text, type: 'bot' }])
			setInputValue('')
		} catch (error) {
			console.error('QA Error:', error)
		}
	}

	const handleClick = async () => {
		// Prevent empty submissions
		if (!inputValue.trim()) return

		setChatBubbles((prev) => [...prev, { text: inputValue, type: 'user' }])

		handleQuery()
	}

	return (
		<>
			<header>
				<div className="flex h-[90vh] min-h-[calc(100vh-80px)] w-full flex-col justify-center sm:px-16 md:mx-auto">
					<div className="flex h-full flex-col items-center justify-center md:flex-row">
						<div className="z-20 h-[60vh] w-full min-w-[450px] max-w-[60vw]">
							<RiveComponent />
						</div>

						<div className="z-20 flex h-[60vh] w-full min-w-[450px] max-w-[60vw] flex-col justify-between pb-4 pr-16">
							<div className="flex w-full flex-1 flex-col justify-end gap-4 overflow-y-auto rounded-[30px] bg-[#8395ff18] p-8 text-gray-400">
								{/* chat bubbles */}
								{chatBubbles.map((bubble, index) => (
									<div
										key={index}
										className={`flex ${bubble.type === 'user' ? 'justify-end' : 'justify-start'}`}
									>
										<div
											className={`max-w-[70%] rounded-[20px] p-4 ${
												bubble.type === 'user'
													? 'bg-blue-500 text-white'
													: 'bg-gray-300 text-gray-800'
											}`}
										>
											{bubble.text}
										</div>
									</div>
								))}
							</div>

							<div className="mt-4 flex w-full rounded-[30px] bg-[#ffffff27] p-2 text-gray-400">
								<input
									className="ml-2 w-full border-none bg-transparent p-2 text-white placeholder-gray-400 focus:outline-none"
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
									placeholder="Ask anything about me, or choose options bellow"
								/>
								<button
									onClick={handleClick}
									className="ml-2 rounded-[24px] bg-[#ffffff27] px-6 py-2 text-white hover:bg-[#ffffff3d]"
								>
									<BiSend size={32} />
								</button>
							</div>
							<div className="mt-4 flex w-full items-center justify-center gap-2 text-center text-sm text-gray-400">
								<button
									onClick={() => setInputValue('Tell me about your work experience')}
									className="mr-2 bg-transparent p-0 font-semibold text-yellow-500 hover:underline"
								>
									&quot;Tell me about your work experience&quot;
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="stars"></div>
				<div className="stars1"></div>
				<div className="stars2"></div>
				<div className="shooting-stars"></div>
				<div className="hills-back">
					<img src="images/hills-back.svg" />
				</div>
				<div className="hills-front">
					<img src="images/hills-front.svg" />
				</div>

			</header>
		</>
	)
}

export default Hero
