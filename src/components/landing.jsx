import React from 'react';
import Social from './social';
import Emoji from './emoji';
import PDF from '../documents/resume.pdf';

export default () => (
	<div className="landing">
		<div className="social">
			<ul>
				<li>
					<Social href="mailto:cameron.slupeiks@carleton.ca" target="blank" name="email-outline" />
				</li>
				<li>
					<Social href={PDF} target="blank" name="file-text-outline" />
				</li>
				<li>
					<Social href="https://github.com/cameronSlupeiks" target="blank" name="github-outline" />
				</li>
				<li>
					<Social
						href="https://www.linkedin.com/in/cameronslupeiks/"
						target="blank"
						name="linkedin-outline"
					/>
				</li>
			</ul>
		</div>
		<h1 className="name">
			<span>Cam</span> Slupeiks
		</h1>
		<div className="info">
			<h2>
				<Emoji symbol="📍" label="Round Pushpin"/>
				Ottawa, Canada
			</h2>
			<h2>
				<Emoji symbol="👨‍💻" label="Man Technologist: Medium-Light Skin Tone"/>
				{' '} Developer @ {' '}
				<a href="https://crypto4a.com/" target="blank">
					Crypto4A
				</a>
			</h2>
		</div>
	</div>
);
