import React, { Component } from 'react';
import Burger from './Burger';
import { ButtonGroup, Button, Row, Col } from 'reactstrap';
import BurgerList from "./BurgerList";
import BurgerTable from "./BurgerTable";

export default class BurgerContainer extends Component {
	constructor() {
		super();
		this.state = {
			burgers: [],
			view: 'grid'
		};
	}
	componentDidMount() {
		fetch('/api/burgers')
			.then(res => res.json())
			.then(burgers => this.setState({ burgers }))
			.catch(err => console.error(err));
	}
	render() {
		const getColor = v => this.state.view === v ? 'primary' : 'default';
		return (
			<div>
				<Row className="text-center">
					<Col>
						<Button color={getColor('grid')} size="lg" className="btn-block" onClick={() => this.setState({ view: 'grid' })}>Grid view</Button>
					</Col>
					<Col>
						<Button color={getColor('table')} size="lg" className="btn-block" onClick={() => this.setState({ view: 'table' })}>Table view</Button>
					</Col>
				</Row>
				{this.state.view === 'table' && <BurgerTable {...this.state} />}
				{this.state.view === 'grid' && <BurgerList {...this.state} />}
			</div>
		);
	}
}