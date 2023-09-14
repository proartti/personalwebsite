import React from 'react'

const Section = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
	<section {...props} className={`bg-blue-grey py-24 ${props.className}`}>
		{children}
	</section>
)
export default Section
