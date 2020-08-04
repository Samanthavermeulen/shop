import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useRoutes, A } from 'hookrouter';
import './styles.css';
import routes from './router';

import initial from './hooks/initialState';

function App() {
	const [ shops, handleChange, handleSearch, HandleRemove, handleEdit, useEffect ] = initial('');

	const routeResult = useRoutes(routes);

	useEffect();
	return (
		<div>
			<ul>
				<li>
					<A href="/">Home </A>
				</li>
				<li>
					<A href="/form">Form</A>
				</li>
				<li>
					<A href="/list">List </A>
				</li>
				<li className="dropdown">
					<a href="#" className="dropbtn">
						Shops
					</a>
					<div className="dropdown-content">
						{shops.map((shop, i) => (
							<A
								href={`/shop/${shop.id}`}
								key={i}
								onClick={() => {
									JSON.stringify(handleSearch(shop.id));
								}}
							>
								{shop.name}
							</A>
						))}
					</div>
				</li>
			</ul>
			{routeResult}
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
