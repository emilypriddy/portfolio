import React from 'react';

export const Portfolio = () => (
	<section className="portfolio-section section">
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="heading">
						<h3><b>Portfolio</b></h3>
						<h6 className="font-lite-black"><b>MY WORK</b></h6>
					</div>
				</div>
				<div className="col-sm-8">
					<div className="portfolioFilter clearfix margin-b-80">
						<a href="http://google.com" data-filter="*" className="current"><b>ALL</b></a>
						<a href="http://google.com" data-filter=".web-design"><b>WEB DESIGN</b></a>
						<a href="http://google.com" data-filter=".branding"><b>BRANDING</b></a>
						<a href="http://google.com" data-filter=".graphic-design"><b>GRAPHIC DESIGN</b></a>
					</div>
				</div>
			</div>
		</div>
		
		<div className="portfolioContainer">
			
			<div className="p-item web-design">
				<a href="images/portfolio-1-600x400.jpg" data-fluidbox>
					<img src="images/portfolio-1-600x400.jpg" alt="" /></a>
			</div>
			
			<div className="p-item branding graphic-design">
				<a href="images/portfolio-7-600x800.jpg" data-fluidbox>
					<img src="images/portfolio-7-600x800.jpg" alt="" /></a>
			</div>
			
			<div className="p-item web-design">
				<a href="images/portfolio-2-600x400.jpg" data-fluidbox>
					<img src="images/portfolio-2-600x400.jpg" alt="" /></a>
			</div>
			
			<div className="p-item p-item-2 graphic-design">
				<a className="img" href="images/portfolio-8-300x400.jpg" data-fluidbox>
					<img src="images/portfolio-8-300x400.jpg" alt="" /></a>
				<a className="img" href="images/portfolio-9-300x400.jpg" data-fluidbox>
					<img src="images/portfolio-9-300x400.jpg" alt="" /></a>
			</div>
			
			<div className="p-item branding graphic-design">
				<a href="images/portfolio-3-600x400.jpg" data-fluidbox>
					<img src="images/portfolio-3-600x400.jpg" alt="" /></a>
			</div>
			
			<div className="p-item graphic-design web-design">
				<a href="images/portfolio-4-600x400.jpg" data-fluidbox>
					<img src="images/portfolio-4-600x400.jpg" alt="" /></a>
			</div>
			
			<div className="p-item  graphic-design branding">
				<a href="images/portfolio-5-600x800.jpg" data-fluidbox>
					<img src="images/portfolio-5-600x800.jpg" alt="" /></a>
			</div>
				
			<div className="p-item web-design branding">
				<a href="images/portfolio-6-600x800.jpg" data-fluidbox>
					<img src="images/portfolio-6-600x800.jpg" alt="" /></a>
			</div>

			<div className="p-item p-item-2 graphic-design">
				<a className="img" href="images/portfolio-10-300x400.jpg" data-fluidbox>
					<img src="images/portfolio-10-300x400.jpg" alt="" /></a>
				<a className="img" href="images/portfolio-11-300x400.jpg" data-fluidbox>
					<img src="images/portfolio-11-300x400.jpg" alt="" /></a>
			</div>
		
		</div>
		
	</section>
);
