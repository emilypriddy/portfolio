import React from 'react';

export const Intro = () => (
	<section className="intro-section">
		<div className="container">
			<div className="row">
				<div className="col-md-1 col-lg-2"></div>
				<div className="col-md-10 col-lg-8">
					<div className="intro">
						<div className="profile-img"><img src="images/profile-1-250x250.jpg" alt="" /></div>
						<h2><b>Michel SMith</b></h2>
						<h4 className="font-yellow">Key Account Manager</h4>
						<ul className="information margin-tb-30">
							<li><b>BORN : </b>August 25, 1987</li>
							<li><b>EMAIL : </b>mymith@mywebpage.com</li>
							<li><b>MARITAL STATUS : </b>Married</li>
						</ul>
						<ul className="social-icons">
							<li><a href="http://google.com"><i className="ion-social-pinterest"></i></a></li>
							<li><a href="http://google.com"><i className="ion-social-linkedin"></i></a></li>
							<li><a href="http://google.com"><i className="ion-social-instagram"></i></a></li>
							<li><a href="http://google.com"><i className="ion-social-facebook"></i></a></li>
							<li><a href="http://google.com"><i className="ion-social-twitter"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
);
