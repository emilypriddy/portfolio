import React from 'react';

export const Degree = (props) => {
	return (
		<div className="education margin-b-50">
			<h4><b>{props.degree}</b></h4>
			<h5 className="font-yellow"><b>{props.college}</b></h5>
			<h6 className="font-lite-black margin-t-10">{props.date}</h6>
			<p className="margin-tb-30">{props.description}</p>
		</div>
	)
}