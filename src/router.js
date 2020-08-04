import React from 'react';
import List from './component/List';
import Form from './component/Form';
import Shop from './component/Shop';
import Edit from './component/Edit';

const routes = {
	'/list': () => <List />,
	'/form': () => <Form />,
	'/shop/:id': (p) => <Shop val={p} />,
	'/edit/:id': (p) => <Edit val={p} />
};

export default routes;
