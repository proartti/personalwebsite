import React from 'react'

import Header from '@/components/Header'
import About from '@/components/About'
import Phrases from '@/components/Phrases'
import SocialLinks, { LinkButtonProps } from '@/components/SocialLinks'
import Agents from '@/components/Agents'

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
	const currentYear = new Date().getFullYear()
	return (
		<>
			<Header />

			{/* <About />

			<Phrases /> */}
			<Agents />

			<SocialLinks links={links} />

			<footer className="relative z-20 bg-white py-24 text-center font-roboto-condensed text-xl font-bold">
				{currentYear} - All rights reserved
			</footer>
		</>
	)
}
