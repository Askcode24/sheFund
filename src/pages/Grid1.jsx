import React from 'react';
export function Grid1({ Container }) {
	return (
		<div className='bloq-grid1'>
			<div className='bloq-img-container1'>
				<span className='bloq-img1'>
					<img src={Container} alt='' />
				</span>
			</div>
			<div className='bloqs-texts'>
				<h5>Travel</h5>
				<p>13 March 2023</p>
				<div className='bloq-subhead'>
					Train Or Bus Journey?Which one suits?
				</div>
				<div className='paragraph'>
					<span className='span'>
						The choice between a train or bus journey depends on
						<br /> various factors such as the distance of the journey, the
						<br /> time available, the cost, and person
					</span>
					<span className='alink'>
						<a href=''>Read More...</a>
					</span>
				</div>
			</div>
		</div>
	);
}
