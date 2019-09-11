import React, { FC } from 'react';

interface Person {
	firstName: String;
	lastName: String;
}
interface Props {
	text: string;
	person: Person;
	convertName: (bob: string) => void;
	date?: string;
}
const TextField: FC<Props> = (props) => {
	const { person, text, date, convertName } = props;

	return (
		<div>
			<h1>{person.firstName}</h1>
			<h1>{person.lastName}</h1>
			{date && <h1> {date}</h1>}
			<input placeholder={text} />
			<button onClick={() => convertName('first.lastName')}>Click Me</button>
		</div>
	);
};

export default TextField;
