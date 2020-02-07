import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ScrollAnimation from 'react-animate-on-scroll';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function SimpleTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className='experience'>
			<ScrollAnimation animateIn='rotateInUpLeft' animateOnce={true}>
				<h3>02. Experience</h3>
				<div className='experience-carousel'>
					<AppBar position='static'>
						<Tabs
							className='tabs'
							value={value}
							onChange={handleChange}
							aria-label='simple tabs example'
							centered
						>
							<Tab label='CRYPTO4A' {...a11yProps(0)} />
							<Tab label='NOKIA' {...a11yProps(1)} />
						</Tabs>
					</AppBar>
					<TabPanel value={value} index={0}>
						<ul className='experience-list'>
							<li>
								Leveraged the <b className='bold'>React</b> library and{' '}
								<b className='bold'>Netlify’s</b> authentication service to implement a documentation
								platform for partners and clients
							</li>
							<li>
								Implemented a performance testing application for Crypto4A’s Universal Cyber Security
								Platform, enabling engineers to actively measure network latency and throughput metrics
								within Crypto4A’s Secure Processing Architecture
							</li>
							<li>
								Created <b className='bold'>BASH</b> scripts to automate essential UCSP hardware tests,
								reducing macro completion time from 20 minutes to 45 seconds
							</li>
							<li>
								Developed <b className='bold'>Python</b> scripts to scrape JSON data from the web for
								plot visualizations in Jenkins
							</li>
							<li>
								Maintained <b className='bold'>Jenkins</b> performance builds and investigated failed
								builds to ensure minimal downtime
							</li>
							<li>
								Created a mirror repository in <b className='bold'>Jenkins</b>, minimizing bandwidth
								usage and reducing macro build times by 65%
							</li>
							<li>Consistently made improvements to existing software documentation</li>
						</ul>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<ul className='experience-list'>
							<li>
								Member of the WaveSuite <b className='bold'>agile</b> development team, actively
								participated in bi-weekly <b className='bold'>sprints</b>, daily{' '}
								<b className='bold'>stand-ups</b>, and <b className='bold'>code reviews</b>
							</li>
							<li>
								Leveraged WaveSuite’s Backup-Restore <b className='bold'>API</b> to implement a new{' '}
								<b className='bold'>UI</b> feature to track backup and restore processes in real-time
							</li>
							<li>
								Developed a shared service in <b className='bold'>Java</b> for WaveSuite applications
								using duplicated features, resulting in the removal of 10,000+ lines of code
							</li>
							<li>
								Wrote 30+ <b className='bold'>JUnit</b> tests using the <b className='bold'>Mockito</b>{' '}
								framework, increasing code coverage by 80% for specific back-end services
							</li>
							<li>
								<b className='bold'>Demoed</b> new application features and enhancements to product
								owners during bi-weekly meetings
							</li>
						</ul>
					</TabPanel>
				</div>
			</ScrollAnimation>
		</div>
	);
}
