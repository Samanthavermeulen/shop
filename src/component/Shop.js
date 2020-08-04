import initial from '../hooks/initialState';
import React from 'react';

function Shop({ val }) {
	const [ shops, handleChange, handleSearch, HandleRemove, handleEdit, useEffect ] = initial('');
	useEffect();
	return (
		<div>
			{shops.map(
				(shop, i) =>
					shop.id == val.id ? (
						<div key={i}>
							<h1>{shop.name}</h1>
							<label>
								<strong>Location:</strong>
							</label>
							<p>{shop.location}</p>
							<label>
								<strong>Description:</strong>
							</label>
							<p>{shop.description}</p>
							<button
								onClick={() => {
									HandleRemove(shop.id);
									window.location.reload(false);
								}}
							>
								Delete
							</button>
							<button
								onClick={() => {
									window.location.href = `/edit/${shop.id}`;
								}}
							>
								Edit
							</button>
						</div>
					) : null
			)}
		</div>
	);
}

export default Shop;
