'use client'

import React from 'react'

import './styles.scss'

const ScrollActionLink = () => {
	const scrollTo = () => {
		console.log('scrollTo')
		document.querySelector('.about')?.scrollIntoView({
			behavior: 'smooth',
		})
	}

	return (
		<div className="scroll-action">
			<a className="scroll-action-link" onClick={scrollTo}>
				<img src="images/icon-scroll.svg" />
			</a>
		</div>
	)
}

export default ScrollActionLink
