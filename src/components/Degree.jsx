import React from 'react';

export const Degree = ({degree, college, date, description}) => {
	return (
		<div className="education margin-b-50">
			<h4><b>{degree}</b></h4>
			<h5 className="font-yellow"><b>{college}</b></h5>
			<h6 className="font-lite-black margin-t-10">{date}</h6>
			<p className="margin-tb-30">{description}</p>
		</div>
	)
}