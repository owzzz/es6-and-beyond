/* Book: ES6 and beyond
 * Author: Kyle Simpson
 **********************************/

import test from 'ava';

test('Mutate arrays/objects inside const variable', (t) => {
	t.plan(1);

	{
		foo();

		function foo() {
			t.pass();
		}
	}

	// calling foo() here would be undefined
	
});