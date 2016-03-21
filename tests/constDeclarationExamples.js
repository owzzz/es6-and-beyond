/* Book: ES6 and beyond
 * Author: Kyle Simpson
 **********************************/

import test from 'ava';

// test('Const variable before and after mutation attempt', (t) => {
// 	// Expect two assertions
// 	t.plan(2);

// 	// Declare thee variables using let
// 	const a = 2;

// 	function mutate() {
// 		a = 3;

// 		return a;
// 	}

// 	// Unable to test this correctly
// 	// Syntax error, "a" is read-only (Which is correct, but want to test for it).
// 	t.throws(mutate(), (err) => {
// 		console.log(err);
// 	}, (success)=> {
// 		console.log(success);
// 	});

// });

test('Mutate arrays/objects inside const variable', (t) => {
	t.plan(1);

	{
		const a = [1,2,3,4];

		a.push(5);

		t.same(a, [1,2,3,4,5]);
	}
});