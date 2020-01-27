import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormGroup } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
		width: 200,
	},
}));

export default () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Grid item xs={12}>
				<Grid item xs={12}>
					<FormGroup className={classes.formGroup} noValidate autoComplete='on'>
						<TextField
							className={classes.textField}
							id='outlined-basic'
							label='First name'
							variant='outlined'
							color='secondary'
							required
						/>
						<TextField
							className={classes.textField}
							id='outlined-basic'
							label='Last Name'
							variant='outlined'
							color='secondary'
						/>
						<TextField
							className={classes.textField}
							id='outlined-basic'
							label='Email'
							variant='outlined'
							color='secondary'
							required
						/>
						<TextField
							className={classes.textField}
							id='outlined-basic'
							label='Subject'
							variant='outlined'
							color='secondary'
						/>
						<TextField
							className={classes.textField}
							id='outlined-static'
							label='Message'
							multiline
							rows='4'
							variant='outlined'
							color='secondary'
							required
						/>
						<Button className={classes.button} variant='contained' color='primary'>
							Send
						</Button>
					</FormGroup>
				</Grid>
			</Grid>
		</div>
	);
};
