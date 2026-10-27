'use client'
import React from 'react'

import Image from 'next/image'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'

import Section from '../Section'

// @ts-ignore -- Stylesheet modules are handled by the application's bundler.
import './styles.scss'

// Mouse-follow tuning: skew in degrees for the whole group, travel in pixels
// per layer -- the phrases drift further than the ship so the group reads as
// layers instead of one sheared sheet.
const SKEW_X = 6
const SKEW_Y = 2
const SHIP_TRAVEL = 6
const PHRASE_TRAVEL = 16
const SPRING = { stiffness: 120, damping: 20, mass: 0.6 }

const Phrases = () => {
	const reduceMotion = useReducedMotion()

	// -1 .. 1 on both axes, 0 at the center of the section
	const pointerX = useMotionValue(0)
	const pointerY = useMotionValue(0)

	const x = useSpring(pointerX, SPRING)
	const y = useSpring(pointerY, SPRING)

	const skewX = useTransform(x, [-1, 1], [SKEW_X, -SKEW_X])
	const skewY = useTransform(y, [-1, 1], [-SKEW_Y, SKEW_Y])

	const shipX = useTransform(x, [-1, 1], [-SHIP_TRAVEL, SHIP_TRAVEL])
	const shipY = useTransform(y, [-1, 1], [-SHIP_TRAVEL, SHIP_TRAVEL])

	const phraseX = useTransform(x, [-1, 1], [-PHRASE_TRAVEL, PHRASE_TRAVEL])
	const phraseY = useTransform(y, [-1, 1], [-PHRASE_TRAVEL, PHRASE_TRAVEL])

	const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
		if (reduceMotion) return

		const bounds = event.currentTarget.getBoundingClientRect()
		pointerX.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1)
		pointerY.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1)
	}

	const handleMouseLeave = () => {
		pointerX.set(0)
		pointerY.set(0)
	}

	return (
		<Section
			id="phrases"
			className="bg-[#f4f6f8]"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<div className="edge-bottom">
				<Image src="/images/edge-top.svg" alt="Edge Bottom" width={650} height={45} />
			</div>

			<div className="absolute left-1/2 top-[225px] z-20 mx-auto h-[650px] w-fit -translate-x-1/2 -translate-y-1/2">
				<motion.div className="relative w-fit" style={{ skewX, skewY }}>
					<div className="absolute left-[calc(50%_+_155px)] top-[17%] rotate-[352deg] whitespace-nowrap text-6xl font-black text-gray-700">
						<motion.div style={{ x: phraseX, y: phraseY }}>
							<motion.div
								initial={{ opacity: 0, x: -80 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.7 }}
								transition={{ duration: 0.7, delay: 0.7, ease: 'backOut' }}
							>
								This is the moment
								<br />
								to build your idea!
							</motion.div>
						</motion.div>
					</div>

					<div className="absolute right-[calc(50%_+_155px)] top-[23%] rotate-2 whitespace-nowrap text-right text-2xl font-black text-gray-700">
						<motion.div style={{ x: phraseX, y: phraseY }}>
							<motion.div
								initial={{ opacity: 0, x: 80 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.7 }}
								transition={{ duration: 0.7, delay: 0.9, ease: 'backOut' }}
							>
								More than 15 year
								<br />
								of hands on experience
							</motion.div>
						</motion.div>
					</div>

					<div className="absolute right-[calc(50%_+_155px)] top-[calc(25%_+_105px)] -rotate-12 whitespace-nowrap text-right text-4xl font-black text-gray-700">
						<motion.div style={{ x: phraseX, y: phraseY }}>
							<motion.div
								initial={{ opacity: 0, x: 80 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 1 }}
								transition={{ duration: 0.7, delay: 0.8, ease: 'backOut' }}
							>
								Smart use of AI
								<br />
								boosts speed and quality
							</motion.div>
						</motion.div>
					</div>

					<motion.div style={{ x: shipX, y: shipY }}>
						<motion.div
							initial={{ opacity: 0, y: 350, scale: 0.8 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true, amount: 0.25 }}
							transition={{ duration: 0.75, ease: [0.758, -0.015, 0.394, 1.531] }}
						>
							<Image src="/images/ship.svg" alt="Ship" width={650} height={650} />
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</Section>
	)
}

export default Phrases
