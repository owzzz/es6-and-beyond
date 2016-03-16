/* Book: ES6 and beyond
 * Author: Kyle Simpson
 **********************************/

import test from 'ava';

/*
 * Topic: Blocked-Scoped Declarations
 * Page: 7
 *************************************/

test('It should create correct scope and use let for declaration', (t) => {
	// Expect two assertions
	t.plan(2);
	// let Declaration (Outer Scope)
	let a = 2;

	// Create inner scope using brackets
	{
		// let Declaration (Inner Scope)
		let a = 3;
		// Assert a is equal to 3
		t.is(a, 3);
	}
	// Assert a is equal to 2
	t.is(a, 2);
});