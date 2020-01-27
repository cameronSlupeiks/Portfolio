import React from 'react';
import Emoji from './emoji';

export default () => (
	<footer className='footer'>
		<div className='footer-content'>
			Made with <Emoji symbol='🍔' label='Hamburger' /> & <Emoji symbol='🍟' label='French Fries' />.
		</div>
	</footer>
);
