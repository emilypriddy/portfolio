import React from 'react';
import PropTypes from 'prop-types';
import { Counter } from './Counter';

export const Counts = ({counters}) => {
	return (
		<section className="counter-section" id="counter">
			<div className="container">
				<div className="row">
					{counters.map(
						(counter, i) =>
							<Counter
								duration={counter.duration}
								count={counter.count}
								description={counter.description} />
					)}
				</div>
			</div>
	  </section>
	)
}

Counter.proptypes = {
	duration: PropTypes.string,
	count: PropTypes.string,
	description: PropTypes.string
}