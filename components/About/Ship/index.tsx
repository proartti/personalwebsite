'use client'

import React, { useEffect } from 'react'
import { animate, scroll } from '@/node_modules/motion'

import './styles.scss'

const Ship = () => {
	useEffect(() => {
		const ship = document.querySelector('.ship')

		if (ship) {
			scroll(animate(ship, { y: [400, 20], opacity: [0, 1] }), {
				target: ship,
				offset: ['start end', 'end 50%'],
			})
		}
	}, [])

	return (
		<div className="relative">
			<img className="ship" src="images/ship.svg" />
			<div className="ship-background">
				<img src="images/ship-background.svg" />
			</div>
		</div>
	)
}

export default Ship
