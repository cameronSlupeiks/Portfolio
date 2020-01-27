import React from 'react';
import Emoji from './emoji';

export default () => (
	<div className='about-me'>
		<h3>01. About Me</h3>
		<p>
			Hey, I'm Cam <Emoji symbol='👋🏻' label='Waving Hand: Light Skin Tone' />. I'm a third year Computer Science
			student at Carleton University <Emoji symbol='🎓' label='Graduation Cap' />. I'm passionate about working
			with big data & the lastest fullstack technologies, including React{' '}
			<Emoji symbol='⚛️' label='Atom Symbol' /> & Docker <Emoji symbol='🐳' label='Spouting Whale' />. I also
			enjoy going to the gym <Emoji symbol='🏋🏼‍♂️' label='Man Lifting Weights: Medium-Light Skin Tone' /> and
			spending time outdoors <Emoji symbol='🌲' label='Evergreen Tree' />.
		</p>
	</div>
);
