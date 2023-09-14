import React from 'react'

const Section = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
	<section {...props} className={`py-24 bg-blue-grey ${props.className}`}>
		{children}
	</section>
)

export default Section
