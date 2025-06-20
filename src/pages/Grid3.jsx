import React from 'react';
export function Grid3({ Container3 }) {
	return (
		<div className='bloq-grid3'>
			<div className='bloq-img-container3'>
				<span className='bloq-img3'>
					<img src={Container3} alt='' width={'100%'} />
				</span>
			</div>
			<div className='bloqs-texts'>
				<h5>Sport</h5>
				<p>10 March 2023</p>
				<div className='bloq-subhead'>
					How to Be a Dancer in 2023 with proper skills?
				</div>
				<div className='paragraph'>
					<span className='span'>
						Organically grow the holistic world view of disruptive
						<br />
						innovation via workplace diversity and empowerment.
						<br /> survival strategies to ensure proactive
					</span>
					<span className='alink'>
						<a href=''>Read More...</a>
					</span>
				</div>
			</div>
		</div>
	);
}
