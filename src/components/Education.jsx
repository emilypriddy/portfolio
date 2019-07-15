import React from 'react';
import PropTypes from 'prop-types';
import { Degree } from './Degree';

export const Education = ({degrees}) => {
	return (
		<section className="education-section section">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="heading">
							<h3><b>Education</b></h3>
							<h6 className="font-lite-black"><b>ACADEMIC CAREER</b></h6>
						</div>
					</div>
					<div className="col-sm-8">
						<div className="education-wrapper">
							{degrees.map(
								(degree, i) =>
								<Degree
									degree={degree.degree}
									college={degree.college}
									date={degree.date}
									description={degree.description} />
								)}
						</div>
					</div>
				</div>
			</div>
			
		</section>
	)
}

Degree.propTypes = {
	degree: PropTypes.string,
	college: PropTypes.string,
	date: PropTypes.string,
	description: PropTypes.string
}
