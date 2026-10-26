'use client'
import React from 'react'

import Image from 'next/image'
import { motion } from 'motion/react'

import Section from '../Section'

// @ts-ignore -- Stylesheet modules are handled by the application's bundler.
import './styles.scss'

const Phrases = () => {
	return (
		<Section id="phrases" className="bg-[#f4f6f8]">
			<div className="edge-bottom">
				<Image src="/images/edge-top.svg" alt="Edge Bottom" width={650} height={45} />
			</div>

			<div className="absolute left-1/2 top-[225px] z-20 mx-auto h-[650px] w-fit -translate-x-1/2 -translate-y-1/2">
				<div className="relative w-fit">
					<div className="absolute left-[calc(50%_+_155px)] top-[17%] rotate-[352deg] whitespace-nowrap text-6xl font-black text-gray-700">
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
					</div>

					<div className="absolute right-[calc(50%_+_155px)] top-[23%] rotate-2 whitespace-nowrap text-right text-2xl font-black text-gray-700">
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
					</div>

					<div className="absolute right-[calc(50%_+_155px)] top-[calc(25%_+_105px)] -rotate-12 whitespace-nowrap text-right text-4xl font-black text-gray-700">
						<motion.div
							initial={{ opacity: 0, x: 80 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 1 }}
							transition={{ duration: 0.7, delay: 0.8, ease: 'backOut' }}
						>
							Smart use of AI
							<br />
							boosting speed and quality
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 350, scale: 0.8 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.75, ease: [0.758, -0.015, 0.394, 1.531] }}
					>
						<Image src="/images/ship.svg" alt="Ship" width={650} height={650} />
					</motion.div>
				</div>
			</div>
		</Section>
	)
}

export default Phrases
