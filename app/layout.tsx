import React from 'react'
import type { Metadata } from 'next'

import '@/styles/globals.scss'

export const metadata: Metadata = {
	title: 'Tiago Donatti - Front-end Developer',
	description: 'My small spot on the web cosmos where you can know more about me and my work.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="maincsstes">{children}</body>
		</html>
	)
}
