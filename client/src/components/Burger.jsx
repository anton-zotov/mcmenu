import React, { Component } from 'react';
import {
	Card, CardBody, CardTitle, Col
} from 'reactstrap';

class Burger extends Component {
	render() {
		return (
			<Col xs={12} sm={6} md={4}>
				<Card >
					<CardBody>
						<CardTitle>{this.props.name}</CardTitle>
						<hr />
						<ul>
							{this.props.ingredients.map(ing =>
								<li key={ing}>{ing}</li>)}
						</ul>
					</CardBody>
				</Card>
			</Col>
		);
	}
}

export default Burger;