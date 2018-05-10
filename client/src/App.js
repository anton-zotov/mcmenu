import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import BurgerContainer from './components/BurgerContainer';

class App extends Component {
	render() {
		return (
			<Container>
				<BurgerContainer />
			</Container>
		);
	}
}

export default App;