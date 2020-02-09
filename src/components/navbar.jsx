import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Social from './social';
import PDF from '../documents/resume.pdf';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 2,
	},
	list: {
		width: window.innerWidth,
	},
}));

export default props => {
	const classes = useStyles();

	const sections = [
		['About Me', 'about'],
		['Experience', 'experience'],
		['Contact', 'contact'],
	];

	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (side, open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setState({ ...state, [side]: open });
	};

	const sideList = side => (
		<div
			className={classes.list}
			role='presentation'
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				{sections.map((text, index) => (
					<ListItem button key={text[0]}>
						<ListItemText primary={text[0]} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div className={classes.root}>
			<AppBar position='sticky'>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
						onClick={toggleDrawer('left', true)}
					>
						<i className='fas fa-bars'></i>
					</IconButton>
					<Drawer
						open={state.left}
						onClose={toggleDrawer('left', false)}
						transitionDuration={(500, 500)}
						anchor='left'
					>
						{sideList('left')}
					</Drawer>
					<Typography variant='h6' className={classes.title}></Typography>
					<div className='social'>
						<ul>
							<Tooltip title='Email'>
								<li>
									<Social
										href='mailto:cameron.slupeiks@carleton.ca'
										target='blank'
										name='email-outline'
									/>
								</li>
							</Tooltip>
							<Tooltip title='Resume'>
								<li>
									<Social href={PDF} target='blank' name='file-text-outline' />
								</li>
							</Tooltip>
							<Tooltip title='GitHub'>
								<li>
									<Social
										href='https://github.com/cameronSlupeiks'
										target='blank'
										name='github-outline'
									/>
								</li>
							</Tooltip>
							<Tooltip title='LinkedIn'>
								<li>
									<Social
										href='https://www.linkedin.com/in/cameronslupeiks/'
										target='blank'
										name='linkedin-outline'
									/>
								</li>
							</Tooltip>
						</ul>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};
