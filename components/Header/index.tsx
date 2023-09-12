import React from 'react'

import './styles.scss'

//scrollTo="about" duration="1000" offset="-100"

const Header = () => {
	return (
		<>
			<header>
				<div className="container max-w-screen-lg md:mx-auto">
					<div className="flex">
						<div className="container max-w-[50%] box-title">
							<p className="upper-title">Hi, I am Tiago Donatti</p>
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
					<div className="container">
						<div className="scroll-action">
							<a className="scroll-action-link">
								<img src="images/icon-scroll.svg" />
							</a>
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
