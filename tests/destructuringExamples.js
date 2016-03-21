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

	var [a,b,c] = foo();
	var {x: x, y:y, z:z} = bar();

	t.same(foo(), [1,2,3]);
	t.same(bar(), {x: 4, y: 5, z: 6});
});