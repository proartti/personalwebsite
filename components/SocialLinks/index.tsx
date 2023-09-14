import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
		<a href={href} className="btn btn-blue" target="_blank">
			<FontAwesomeIcon fixedWidth icon={iconsMap[icon]} /> <span>{label}</span>
		</a>
	)
}

interface SocialLinksProps {
	links: LinkButtonProps[]
}

const SocialLinks = ({ links }: SocialLinksProps) => {
	return (
		<div
			id="social-links"
			className="relative overflow-hidden bg-blue-grey pt-6 md:overflow-visible md:px-[10%]"
		>
			<div className="container mx-auto flex max-w-screen-lg flex-wrap items-center">
				<div className="relative z-10 mx-auto w-[80%] md:max-w-[50%]">
					<img src="images/majortom-flag.svg" />
				</div>
				<div className="btn-container">
					<h3 className="mb-2 mt-10 w-full text-2xl md:mt-0 md:text-3xl">
						Let&apos;s stay connected
					</h3>

					{links.map((link, index) => (
						<LinkButton key={index} {...link} />
					))}
				</div>
			</div>

			<div className="hill-flag">
				<img src="images/hill-flag.svg" />
			</div>

			<div className="container relative mx-auto flex max-w-screen-lg flex-wrap items-center">
				<div className="hill-flag-background">
					<img src="images/hill-flag-background.svg" />
				</div>
			</div>
		</div>
	)
}

export default SocialLinks
