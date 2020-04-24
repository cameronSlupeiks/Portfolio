import React from 'react';
import Social from './social';
import PDF from '../documents/resume.pdf';

export default () => {
	return (
		<div className='navbar'>
			<div className='social'>
				<ul>
					<li>
						<Social href='mailto:cameron.slupeiks@carleton.ca' target='blank' name='email-outline' />
					</li>

					<li>
						<Social href={PDF} target='blank' name='file-text-outline' />
					</li>

					<li>
						<Social href='https://github.com/cameronSlupeiks' target='blank' name='github-outline' />
					</li>
					<li>
						<Social
							href='https://www.linkedin.com/in/cameronslupeiks/'
							target='blank'
							name='linkedin-outline'
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};
