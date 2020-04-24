import React from 'react';
import Icon from 'react-eva-icons';

export default (props) => (
	<a href={props.href} target={props.target}>
		<Icon
			name={props.name}
			size='small'
			animation={{
				type: '',
				hover: true,
				infinite: false,
			}}
		/>
	</a>
);
