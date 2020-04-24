import React from 'react';
import Emoji from './emoji';

export default () => (
	<div className='landing'>
		<h1 className='name'>
			<span>Cam</span> Slupeiks
		</h1>
		<div className='info'>
			<h2>
				<Emoji symbol='📍' label='Round Pushpin' />
				Ottawa, Canada
			</h2>
			<h2>
				<Emoji symbol='👨🏼‍💻' label='Man Technologist: Medium-Light Skin Tone' /> Intern @{' '}
				<a href='https://www.brashinc.com/' target='blank'>
					Brash Inc.
				</a>
			</h2>
		</div>
	</div>
);
