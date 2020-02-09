import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Form from './form';

export default () => {
	return (
		<div className='contact'>
			<ScrollAnimation animateIn='rotateInUpRight' animateOnce={true}>
				<h3>Contact</h3>
				<Form />
			</ScrollAnimation>
		</div>
	);
};
