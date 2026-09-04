'use client'

import React from 'react'
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
	const { RiveComponent } = useRive({
		src: '/rive_files/goo_explorer.riv',
		stateMachine: 'StateMachine',
		autoplay: true,
		layout: new Layout({
			fit: Fit.FitWidth,
			alignment: Alignment.BottomCenter,
		}),
	})

	return (
		<>
			<div id="social-links" className="relative overflow-hidden bg-blue-grey pt-6">
				<div className="container mx-auto flex h-96 max-w-screen-lg flex-wrap items-start">
					<div className="mt-10 w-full text-center text-6xl font-bold text-white md:text-4xl">
						Let's build something{' '}
						<span className="block text-5xl text-yellow-400">out of this world!</span>
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

				<RiveComponent className="goo-explorer-rive" />
			</div>
		</>
	)
}

export default SocialLinks
