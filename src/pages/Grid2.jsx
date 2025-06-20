import React from 'react';
export function Grid2({ Container2 }) {
	return (
		<div className='bloq-grid2'>
			<div className='bloq-img-container2'>
				<span className='bloq-img2'>
					<img src={Container2} alt='' />
				</span>
			</div>
			<div className='bloqs-texts'>
				<h5>DEVELOPMENT</h5>
				<p>11 March 2023</p>
				<div className='bloq-subhead'>
					Best Website to research for your next project
				</div>
				<div className='paragraph'>
					<span className='span'>
						Capitalize on low hanging fruit to identify a ballpark
						<br /> value added activity to beta test. Override the digital
						<br /> divide with additional clickthroughs
					</span>
					<span className='alink'>
						<a href=''>Read More...</a>
					</span>
				</div>
			</div>
		</div>
	);
}
