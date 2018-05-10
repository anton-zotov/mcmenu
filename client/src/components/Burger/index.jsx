import React, { Component } from 'react';
import {
	Card, CardBody, CardTitle, Col, Badge
} from 'reactstrap';
import "./Burger.css";
import getColor from '../../ingredients/color';
import sorted from '../../ingredients/sorted';

class Burger extends Component {
	render() {
		let ings = sorted(this.props.ingredients);
		return (
			<Col m={12} md={6} lg={4} className="mb-2 mt-2">
				<Card >
					<CardBody>
						<CardTitle>{this.props.name}</CardTitle>
						<hr />
						{ings.map(ing =>
							<Badge className="m-1" color={getColor(ing)} key={ing}>{ing}</Badge>)}
					</CardBody>
				</Card>
			</Col>
		);
	}
}

export default Burger;