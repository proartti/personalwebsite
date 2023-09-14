import React from 'react'

import ScrollActionLink from './ScrollActionLink'
import './styles.scss'

const Header = () => {
	return (
		<>
			<header>
				<div className="container max-w-screen-lg sm:px-16 md:mx-auto">
					<div className="flex flex-col md:flex-row">
						<div className="box-title container md:max-w-[50%]">
							<p className="upper-title mb-3">Hi, I am Tiago Donatti</p>
							<h1 className="title">Front-end Developer</h1>
							<p className="sub-title">
								Welcome to my small spot on the web cosmos where you can know more about me and my
								work. Buckle up and let’s go!
							</p>
						</div>

						<div className="majortom">
							<img className="img-fluid" src="images/majortom-header.svg" alt="Major Tom" />
						</div>
					</div>
					<ScrollActionLink />
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
