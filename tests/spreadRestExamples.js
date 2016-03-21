/* Book: ES6 and beyond
 * Author: Kyle Simpson
 **********************************/

import test from 'ava';

test('basic spread function with ... operator', (t) => {
	t.plan(3);

	function foo(x,y,z) {
		t.is(x, 1);
		t.is(y, 2);
		t.is(z, 3);
	}

	foo(...[1,2,3]);
});

test('rest with ... operator', (t) => {

	function foo(...args) {
		// Remove first value in array
		args.shift();

		t.same(args, [2,3,4,5]);
	}

	foo(1,2,3,4,5);
});

test('spread with ... operator', (t) => {

	let a = [2,3,4];
	let b = [1, ...a, 5];

	t.same(b, [1,2,3,4,5]);
});

test('rest with multiple arguments', (t) => {

	function foo(a, b, ...c) {
		t.is(a, 1);
		t.is(b, 2);
		t.same(c, [3,4,5]);
	}


	foo(1,2,3,4,5);
});

test('concatenate two arrays using spread operator', (t) => {
	let a = [1,2,3];
	let b = [4,5,6];

	a.push(...b);
});

test('rest operator to gather all arguments', (t) => {


	function foo(...args) {
		t.same(args, [1,2,3,4,5]); //Compare args value to an array [1,2,3,4,5]
	}

	foo(1,2,3,4,5);
});