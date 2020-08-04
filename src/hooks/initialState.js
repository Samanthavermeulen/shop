import { useState } from 'react';

function InitialTodoHook() {
	const initialShopsData = JSON.parse(localStorage.getItem('shops')) || [];
	const [ shops, setState ] = useState(initialShopsData);

	const handleChange = (e) => {
		let changeItem = {
			id: shops.length > 0 ? shops[shops.length - 1].id + 1 : 1,
			name: e.currentTarget[0].defaultValue,
			location: e.currentTarget[1].defaultValue,
			description: e.currentTarget[2].defaultValue
		};

		shops.push(changeItem);

		setState(shops);
	};

	const handleSearch = (e) => {
		let seachItems = shops.filter((p) => p.id == e);

		if (seachItems.length >= 1) {
			return seachItems[0];
		} else {
			return null;
		}
	};

	const HandleRemove = (e) => {
		let updateItem = shops.filter((p) => p.id !== e);
		setState(updateItem);

		localStorage.setItem('shops', JSON.stringify(updateItem));
	};

	const handleEdit = (e) => {
		let editItem = shops.filter((p) => p.id !== e.id);

		editItem.push(e);

		setState(editItem);
	};

	const useEffect = () => {
		window.localStorage.setItem('shops', JSON.stringify(shops));
	};

	return [ shops, handleChange, handleSearch, HandleRemove, handleEdit, useEffect ];
}

export default InitialTodoHook;
