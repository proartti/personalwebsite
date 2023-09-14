import React from 'react'

import Header from '@/components/Header'
import About from '@/components/About'
import Phrases from '@/components/Phrases'
import SocialLinks, { LinkButtonProps } from '@/components/SocialLinks'

const links: LinkButtonProps[] = [
	{
		href: 'https://www.behance.net/proartti',
		icon: 'behance',
		label: 'Behance',
	},
	{
		href: 'https://github.com/proartti/',
		icon: 'github',
		label: 'GitHub',
	},
	{
		href: 'https://www.linkedin.com/in/proartti/',
		icon: 'linkedin',
		label: 'LinkedIn',
	},
	{
		href: 'https://twitter.com/tiagodonatti',
		icon: 'twitter',
		label: 'Twitter',
	},
]

export default function Home() {
	return (
		<>
			<Header />

			<About />

			<Phrases />

			<SocialLinks links={links} />

			<div>projects</div>

			<footer>2021 - All rights reserved</footer>
		</>
	)
}
