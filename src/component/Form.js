import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import useFormState from '../hooks/useFormState';
import initial from '../hooks/initialState';

function Form() {
	const [ valueShop, setShop, resetShop ] = useFormState('');
	const [ valueLocation, setLocation, resetLocation ] = useFormState('');
	const [ valueDescription, setDescription, resetDescription ] = useFormState('');

	const [ shops, handleChange, handleSearch, HandleRemove, handleEdit, useEffect ] = initial('');

	useEffect();

	return (
		<div>
			<h1>Form</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleChange(e);
					resetShop();
					resetLocation();
					resetDescription();
					window.location.reload(false);
				}}
			>
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
			</form>
		</div>
	);
}

export default Form;
