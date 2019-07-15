import React from 'react';

export const Counter = ({duration, count, description}) => {
	return (
		<div className="col-sm-6 col-md-6 col-lg-3">
			<div className="counter margin-b-30">
				<h1 className="title"><b><span className="counter-value" data-duration={duration} data-count={count}>0</span></b></h1>
				<h5 className="desc"><b>{description}</b></h5>
			</div>
		</div>
	)
}