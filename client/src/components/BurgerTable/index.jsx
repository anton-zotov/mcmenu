import React, { Component } from 'react';
import Burger from '../Burger';
import { Table } from 'reactstrap';
import sorted from '../../ingredients/sorted';
import "./BurgerTable.css";


export default class BurgerTable extends Component {
	render() {
		console.log(this.props.burgers);
		let ingredients = new Set(this.props.burgers.reduce((all, { ingredients }) => [...all, ...ingredients], []));
		ingredients = sorted(Array.from(ingredients));
		console.log(ingredients);
		return (
			<div className="table-holder">
				<table>
					<thead>
						<tr>
							<th></th>
							{this.props.burgers.map(burger => <th key={burger.name}>{burger.name}</th>)}
						</tr>
					</thead>
					<tbody>
						{ingredients.map(ing => <tr>
							<td>{ing}</td>
							{this.props.burgers.map(burger =>
								<td key={burger.name}>{burger.ingredients.includes(ing) ? '+' : ''}</td>)}
							<td>{ing}</td>
						</tr>)}
					</tbody>
				</table>
			</div>
		);
	}
}