import React from 'react'
import Ship from './Ship'

import Section from '../Section'
import SectionHeading, { Small } from '../SectionHeading'

export const SCROLL_TARGET_ID_ABOUT = 'about'

const About = () => {
	return (
		<Section id={SCROLL_TARGET_ID_ABOUT}>
			<div className="container mx-auto max-w-screen-xl">
				<SectionHeading
					title={
						<>
							Intro <Small>about me</Small>
						</>
					}
					subtitle="Father of two, husband and Major Explorer of this vast web development universe."
				/>

				<div className="grid grid-cols-1 md:grid-cols-[60%_1fr] xl:grid-cols-2">
					<div className="mx-12 flex flex-col justify-center leading-relaxed md:mr-0 md:text-sm lg:text-base">
						<p className="mb-4">
							It’s been about 10 years since I accepted the mission and took off in my spaceship to
							the vast Web Developer Universe. It was a turbulent start with huge IE6 time sinks and
							painful plain CSS2 styles sheets. New mobile technology had arrived in the cosmos and
							I managed to change my old Flash engine into a new JavaScript based engine and was
							able to travel several light years ahead.
						</p>
						<p className="mb-4">
							Awesomely built, easy-to-use fast apps are truly a passion of mine. I actively seek
							out new ‘planets’ and technologies, exploring the unknown parts of the galaxy to stay
							up-to-date not only with the latest industry trends but also any ‘alien’ advanced
							technology. ;)
						</p>
						<p className="mb-4">
							If you are an explorer, like me, willing to know more about things, go straight to my
							Bahance and my Git Hub profile, where this angular website is there for you to explore
							at will.
						</p>
						<p className="mb-4">
							Intergalactic messages can be sent to my e-mail contact@tiagodonatti.net
						</p>
						<p>
							<strong>Live long and prosper</strong>
						</p>
					</div>
					<Ship />
				</div>
			</div>
		</Section>
	)
}

export default About
