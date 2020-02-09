import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginTop: theme.spacing(4),
		width: 350,
	},
	formGroup: {
		alignItems: 'center',
	},
	button: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
		width: 200,
	},
}));

export default () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Grid item xs={12}>
				<Grid item xs={12}>
					<form className='ui form' name='contact' method='post'>
						<input type='hidden' name='form-name' value='contact' />
						<div class='field'>
							<label>First Name</label>
							<input type='text' name='first-name' placeholder='First Name' />
						</div>
						<div class='field'>
							<label>Last Name</label>
							<input type='text' name='last-name' placeholder='Last Name' />
						</div>
						<button class='ui button' type='submit'>
							Submit
						</button>
					</form>
				</Grid>
			</Grid>
		</div>
	);
};
