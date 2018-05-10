import React, { Component } from 'react';
import Burger from './Burger';
import { Row } from 'reactstrap';

class BurgerList extends Component {
	render() {
		return (
			<Row>
				{this.props.burgers.map(burger => <Burger key={burger.name} {...burger} />)}
			</Row>
		);
	}
}

export default BurgerList;