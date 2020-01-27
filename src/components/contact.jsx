import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Form from './form';

export default () => {
	return (
		<div className='contact'>
			<h3>03. Contact</h3>
			<ScrollAnimation animateIn='fadeInRight' animateOnce='true'>
				<Form />
			</ScrollAnimation>
		</div>
	);
};
