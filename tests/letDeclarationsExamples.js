/* Book: ES6 and beyond
 * Author: Kyle Simpson
 **********************************/

import test from 'ava';

/*
 * Topic: Blocked-Scoped / Let Declarations
 * Page: 8
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

test('It should declare 3 variables using let', (t) => {
	// Expect three assertions
	t.plan(3);

	// Declare thee variables using let
	{ let a = 3, b, c;
		t.is(a, 3);
		t.is(b, undefined);
		t.is(c, undefined);
	}
});

test('Accessing let declared variable before being assigned', (t) => {
	// Expect two assertions
	t.plan(2);

	// Declare thee variables using let
	{
		t.is(a, undefined);
		t.is(b, undefined); // Should be Reference Error but returned undefined

		var a;
		let b;
	}
});


