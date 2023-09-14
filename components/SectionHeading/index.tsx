import React from 'react'

interface SectionHeadingProps {
	title: string | React.ReactNode
	subtitle: string | React.ReactNode
}

interface SmallProps {
	children: React.ReactNode
}

export const Small = ({ children }: SmallProps) => (
	<small className="font-roboto-condensed text-[100%] font-light uppercase text-section-title-small">
		{children}
	</small>
)

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
	return (
		<div className="mb-24 w-[100%] text-center">
			<h3 className="mb-0 font-industry text-4xl uppercase text-section-title md:text-5xl">
				{title}
			</h3>
			<h4 className="mx-4 font-roboto text-2xl text-section-subtitle">{subtitle}</h4>
		</div>
	)
}
export default SectionHeading
