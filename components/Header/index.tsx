'use client'
import React, { useEffect } from 'react'
import { animate } from 'motion'

import ScrollActionLink from './ScrollActionLink'
import './styles.scss'

const Header = () => {
	useEffect(() => {
		const title = document.querySelectorAll('.title')
		animate(title, { x: [-100, 0], opacity: [0, 1] }, { duration: 3, easing: [0.02, 0, 0, 1] })
	}, [])

	return (
		<>
			<header>
				<div className="container max-w-screen-lg sm:px-16 md:mx-auto md:min-h-[650px]">
					<div className="flex flex-col md:flex-row">
						<div className="box-title container md:max-w-[50%]">
							<p className="upper-title mb-3">Hi, I am Tiago Donatti</p>
							<h1 className="title">Software Engineer</h1>
						</div>

						<div className="majortom">
							<img className="img-fluid" src="images/majortom-header.svg" alt="Major Tom" />
						</div>
					</div>
				</div>

				<div className="stars"></div>
				<div className="stars1"></div>
				<div className="stars2"></div>
				<div className="shooting-stars"></div>
				<div className="hills-back">
					<img src="images/hills-back.svg" />
				</div>
				<div className="hills-front">
					<img src="images/hills-front.svg" />
				</div>

				<div className="pentagon pos1">
					<img src="images/pentagon.svg" />
				</div>
				<div className="pentagon pos2">
					<img src="images/pentagon-outline.svg" />
				</div>
				<div className="pentagon pos3">
					<img src="images/pentagon.svg" />
				</div>
				<div className="pentagon pos4">
					<img src="images/pentagon-outline.svg" />
				</div>
				<div className="pentagon pos5">
					<img src="images/pentagon.svg" />
				</div>
				<div className="pentagon pos6">
					<img src="images/pentagon.svg" />
				</div>
				<div className="pentagon pos7">
					<img src="images/pentagon-outline.svg" />
				</div>
			</header>
		</>
	)
}

export default Header
