import React from 'react';
import PropTypes from 'prop-types';
import { Skill } from './Skill';

export const About = ({skills}) => {
	return (
		<section className="about-section section">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="heading">
							<h3><b>About me</b></h3>
							<h6 className="font-lite-black"><b>PROFESSIONAL PATH</b></h6>
						</div>
					</div>
					<div className="col-sm-8">
						<p className="margin-b-50">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque 
						sit amet sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Nulla maximus pellentes que velit, quis consequat nulla effi citur at. 
						Maecenas sed massa tristique.Duis non volutpat arcu, eu mollis tellus. 
						Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet, 
						consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur 
						adipiscing elit. Nulla maximus pellentes que velit, quis consequat nulla 
						effi citur at.Maecenas sed massa tristique.</p>
						
						<div className="row">
							{skills.map(
								(skill, i) =>
									<Skill 
										title={skill.title}
										percent={skill.percent} />
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

Skill.propTypes = {
	title: PropTypes.string,
	percent: PropTypes.string
}