'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-webgl2'

// @ts-ignore -- Stylesheet modules are handled by the application's bundler.
import './styles.scss'

export interface LinkButtonProps {
	href: string
	icon: 'behance' | 'github' | 'linkedin' | 'twitter'
	label: string
}

const LinkButton = ({ href, icon, label }: LinkButtonProps) => {
	const iconsMap = {
		behance: faBehance,
		github: faGithub,
		linkedin: faLinkedin,
		twitter: faXTwitter,
	}

	return (
		<Link href={href} className="btn btn-blue" target="_blank">
			<FontAwesomeIcon fixedWidth icon={iconsMap[icon]} className="" /> <span>{label}</span>
		</Link>
	)
}

interface SocialLinksProps {
	links: LinkButtonProps[]
}

const SocialLinks = ({ links }: SocialLinksProps) => {
	// Sits flush against the bottom edge of the graphic, so it enters the viewport
	// at exactly the moment the graphic has become fully visible.
	const bottomEdgeRef = useRef<HTMLDivElement>(null)

	const { rive, RiveComponent } = useRive({
		src: '/rive_files/goo_explorer.riv',
		stateMachine: 'StateMachine',
		autoplay: false,
		layout: new Layout({
			fit: Fit.FitWidth,
			alignment: Alignment.BottomCenter,
		}),
	})

	// Rive still draws the first frame when autoplay is off, so the graphic is on
	// screen the whole time; only the state machine waits for the scroll.
	useEffect(() => {
		const bottomEdge = bottomEdgeRef.current
		if (!rive || !bottomEdge) return

		const observer = new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting) return
			rive.play()
			observer.disconnect()
		})

		observer.observe(bottomEdge)
		return () => observer.disconnect()
	}, [rive])

	return (
		<>
			<div id="social-links" className="relative overflow-hidden bg-blue-grey pt-6">
				<div className="container mx-auto flex h-96 max-w-screen-lg flex-wrap items-start">
					<div className="mt-14 w-full text-center text-5xl font-bold text-white">
						Let&apos;s build something{' '}
						<span className="mt-2 block text-6xl font-black text-yellow-400">
							out of this world!
						</span>
					</div>

					<div className="btn-container">
						<h3 className="mb-2 mt-10 w-full text-2xl font-bold text-white md:mt-0 md:text-4xl">
							Stay connected!
						</h3>

						{links.map((link, index) => (
							<LinkButton key={index} {...link} />
						))}
					</div>
				</div>

				<div className="relative">
					<RiveComponent className="goo-explorer-rive" />
					<div ref={bottomEdgeRef} aria-hidden className="absolute bottom-0 h-px w-full" />
				</div>
			</div>
		</>
	)
}

export default SocialLinks
