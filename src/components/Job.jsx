import React from 'react';

export const Job = ({position, company, dates, description, responsibilities}) => {
	return (
		<div className="experience margin-b-50">
			<h4><b>{position}</b></h4>
			<h5 className="font-yellow"><b>{company}</b></h5>
			<h6 className="margin-t-10">{dates}</h6>
			<p className="font-semi-white margin-tb-30">{description}</p>
			<ul>
				{responsibilities.map(item => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	)
}