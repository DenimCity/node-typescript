import React from 'react';
import { shallow } from 'enzyme';
import TextField from '../components/Text';

describe('Text Input', () => {
	const person = {
		firstName: 'Joe',
		lastName: 'Doe',
	};

	it('it renders without crashing', async () => {
		const wrapper = shallow(<TextField person={person} />);
		expect(wrapper.exists()).toBe(true);
	});
});
