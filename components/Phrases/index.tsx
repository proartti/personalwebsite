import React from 'react'

import Section from '../Section'

import './styles.scss'

const Phrases = () => {
	return (
		<Section id="phrases">
			<div className="edge-top">
				<img src="images/edge-top.svg" />
			</div>
			<div className="edge-bottom">
				<img src="images/edge-bottom.svg" />
			</div>

			<div className="container mx-auto max-w-screen-lg">
				<div className="row">
					<div className="col">
						<div className="phrase-box">
							<div className="phrase-text">
								"For me, being a Senior Developer means more than just having the experience, it
								means that as a Senior I can understand business and product choices and make
								decisions and plan before coding ever happens. When it comes to coding, a Senior
								should be able not only to code but must importantly to code it right. Reliability,
								proficiency, knowledge and scalability are the Senior’s keywords."
							</div>
							<div className="phrase-author">Tiago Donatti</div>
						</div>
					</div>
				</div>
			</div>

			<div className="explorer">
				<img src="images/goo-explorer.svg" />
			</div>
		</Section>
	)
}

export default Phrases
