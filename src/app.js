import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import NavBar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Experience from './components/experience';
import ScrollToTop from './components/scroll';
import Footer from './components/footer';
import './styles/main.scss';

export default () => (
	<div className='app'>
		<NavBar />
		<Toolbar id='back-to-top-anchor' />
		<Landing />
		<About />
		<Experience />
		<ScrollToTop />
		<Footer />
	</div>
);
