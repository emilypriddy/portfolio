import React from 'react';

export const Header = () => (
	<header>
		<div className="container">
			<div className="heading-wrapper">
				<div className="row">
					<div className="col-sm-6 col-md-6 col-lg-4">
						<div className="info">
							<i className="icon ion-ios-location-outline"></i>
							<div className="right-area">
								<h5>3008 Sarah Drive</h5>
								<h5>Franklin,LA 70538</h5>
							</div>
						</div>
					</div>
					
					<div className="col-sm-6 col-md-6 col-lg-4">
						<div className="info">
							<i className="icon ion-ios-telephone-outline"></i>
							<div className="right-area">
								<h5>337-4139538</h5>
								<h6>MIN - FRI,8AM - 7PM</h6>
							</div>
						</div>
					</div>
					
					<div className="col-sm-6 col-md-6 col-lg-4">
						<div className="info">
							<i className="icon ion-ios-chatboxes-outline"></i>
							<div className="right-area">
								<h5>contact@colorlib.com</h5>
								<h6>REPLY IN 24 HOURS</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a className="downlad-btn" href="http://google.com">Download CV</a>
		</div>
	</header>
);
