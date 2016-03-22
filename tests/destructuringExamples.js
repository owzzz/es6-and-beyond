import test from 'ava';

test('Destructuring', (t) => {

	function foo() {
		return [1,2,3];
	}

	function bar() {
		return {
			x: 4,
			y: 5,
			z: 6
		}
	}

	let [a,b,c] = foo();
	let {x: x, y:y, z:z} = bar();

	t.same(foo(), [1,2,3]);
	t.same(bar(), {x: 4, y: 5, z: 6});
});

test('Basic destructuring assignment', (t) => {
	t.plan(5);
	
	let foo = [1,2,3,4,5];

	var [one, two, three, four, five] = foo;

	t.is(one, 1);
	t.is(two, 2);
	t.is(three, 3);
	t.is(four, 4);
	t.is(five, 5);
});