import React, { Component } from 'react';
import Burger from './Burger';
import { Row } from 'reactstrap';

class BurgerList extends Component {
	constructor() {
		super();
		this.state = {
			burgers: []
		};
	}
	componentDidMount() {
		fetch('/api/burgers')
			.then(res => res.json())
			.then(burgers => this.setState({ burgers }))
			.catch(err => console.error(err));
	}
	render() {
		return (
			<Row>
				{this.state.burgers.map(burger => <Burger key={burger.name} {...burger} />)}
			</Row>
		);
	}
}

export default BurgerList;