import React from 'react';
import PropTypes from 'prop-types';
import { Job } from './Job';

export const Experience = ({jobs}) => {
	return (
		<section className="experience-section section">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="heading">
							<h3><b>Work Experience</b></h3>
							<h6 className="font-lite-black"><b>PREVIOUS JOBS</b></h6>
						</div>
					</div>
					<div className="col-sm-8">
						{jobs.map(
							(job, i) =>
								<Job
									position={job.position}
									company={job.company}
									dates={job.dates}
									description={job.description}
									responsibilities={job.responsibilities} />
								)}
					</div>
				</div>
			</div>
		</section>
	)
}

Job.propTypes = {
  position: PropTypes.string,
  company: PropTypes.string,
  dates: PropTypes.string,
  description: PropTypes.string,
  responsibilities: PropTypes.array
}