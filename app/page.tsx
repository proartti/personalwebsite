import './page.scss'

import Header from '../components/Header'

export default function Home() {
	return (
		<>
			<Header />

			<div>about</div>

			<div>phrases</div>

			<div className="mid-position">
				<div className="container position-relative">
					<div className="majortom-flag">
						<img src="assets/img/majortom-flag.svg" />
					</div>
					<div className="btn-box">
						<h3>Let's stay connected</h3>
						<a
							href="https://www.behance.net/proartti"
							className="btn btn-primary btn-lg"
							target="_blank"
						>
							<i className="fa fa-behance"></i> <span>Behance</span>
						</a>
						<a
							href="https://github.com/proartti/"
							className="btn btn-primary btn-lg"
							target="_blank"
						>
							<i className="fa fa-github"></i> <span>GitHub</span>
						</a>
						<a
							href="https://www.linkedin.com/in/proartti/"
							className="btn btn-primary btn-lg"
							target="_blank"
						>
							<i className="fa fa-linkedin"></i> <span>LinkedIn</span>
						</a>
						<a
							href="https://twitter.com/tiagodonatti"
							className="btn btn-primary btn-lg"
							target="_blank"
						>
							<i className="fa fa-twitter"></i> <span>Twitter</span>
						</a>
					</div>
				</div>

				<div className="hill-flag">
					<img src="assets/img/hill-flag.svg" />
				</div>

				<div className="container position-relative">
					<div className="hill-flag-background">
						<img src="assets/img/hill-flag-background.svg" />
					</div>
				</div>
			</div>

			<div>projects</div>

			<footer>2021 - All rights reserved</footer>
		</>
	)
}
