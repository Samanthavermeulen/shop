import initial from '../hooks/initialState';
import useFormState from '../hooks/useFormState';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import React from 'react';

function Edit({ val }) {
	const [ shops, handleChange, handleSearch, HandleRemove, handleEdit, useEffect ] = initial('');

	const shopFilter = shops.filter((p) => p.id == val.id);

	const shop = shopFilter != null && shopFilter.length > 0 ? shopFilter[0] : null;

	const [ valueShop, setShop, resetShop ] = useFormState(shop.name);
	const [ valueLocation, setLocation, resetLocation ] = useFormState(shop.location);
	const [ valueDescription, setDescription, resetDescription ] = useFormState(shop.description);

	useEffect();

	return (
		<div>
			<h1>Edit</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleEdit({
						id: shop.id,
						name: valueShop,
						location: valueLocation,
						description: valueDescription
					});
					resetShop();
					resetLocation();
					resetDescription();
					window.location.reload(false);
				}}
			>
				<div>
					<Box width="50%">
						<label>Shop name:</label>
						<TextField value={valueShop} onChange={setShop} />
						<br />
						{valueShop}
						<br />
						<label>Location:</label>
						<TextField value={valueLocation} onChange={setLocation} />
						<br />
						{valueLocation}
						<br />
						<label>Description:</label>
						<TextField value={valueDescription} onChange={setDescription} />
						<br />
						{valueDescription}
						<br />
					</Box>
					<br />
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default Edit;
