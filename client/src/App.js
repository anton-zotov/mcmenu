import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import BurgerList from './components/BurgerList';

class App extends Component {
	render() {
		return (
			<Container>
				<BurgerList />
			</Container>
		);
	}
}

export default App;