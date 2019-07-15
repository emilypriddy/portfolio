 import React from 'react';

 export const Skill = ({title, percent}) => {
 	return (
 		<div className="col-sm-6 col-md-6 col-lg-3">
			<div className="radial-prog-area margin-b-30">
				<div className="radial-progress" data-prog-percent={percent}>
					<div></div>
					<h6 className="progress-title">{title}</h6>
				</div>
			</div>
		</div>
 	)
 }