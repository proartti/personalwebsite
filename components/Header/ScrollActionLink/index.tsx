'use client'

import React from 'react'

import './styles.scss'
import { SCROLL_TARGET_ID_ABOUT } from '../../About'

const ScrollActionLink = () => {
	const scrollTo = () => {
		console.log('scrollTo')
		document.querySelector('#' + SCROLL_TARGET_ID_ABOUT)?.scrollIntoView({
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
