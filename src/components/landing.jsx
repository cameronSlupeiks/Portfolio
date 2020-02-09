import React from 'react';
import Emoji from './emoji';
import ScrollAnimation from 'react-animate-on-scroll';

export default () => (
	<div className='landing'>
		<ScrollAnimation animateIn='swing' animateOnce={true}>
			<h1 className='name'>
				<span>Cam</span> Slupeiks
			</h1>
		</ScrollAnimation>
		<div className='info'>
			<h2>
				<Emoji symbol='📍' label='Round Pushpin' />
				Ottawa, Canada
			</h2>
			<h2>
				<Emoji symbol='👨🏼‍💻' label='Man Technologist: Medium-Light Skin Tone' /> Developer @{' '}
				<a href='https://crypto4a.com/' target='blank'>
					Crypto4A
				</a>
			</h2>
		</div>
	</div>
);
