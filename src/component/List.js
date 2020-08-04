import React from 'react';
import initial from '../hooks/initialState';

function List() {
	const [ shops, handleChange, handleSearch, HandleRemove, handleEdit, useEffect ] = initial('');

	if (initial == null) {
		return <p>No item Founds</p>;
	} else {
		return (
			<div>
				{shops.map((shop, i) => <p key={i}>{shop.name}</p>)}
				<br />
			</div>
		);
	}
}

export default List;
