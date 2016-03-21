import test from 'ava';

test('es5 way of setting default parameters', (t) => {
	t.plan(3)

	function foo(x, y) {
		x = x || 11;
		y = y || 31;

		return x + y;
	}

	let b = foo(5,6);
	let c = foo();
	let d = foo(0, 22);

	t.is(b, 11); // returns 5+6=11
	t.is(c, 42); // Returns default values
	t.is(d, 33); // 33 (Gotcha: zero is not used as it is falsy)
});

test('es6 way of setting default parameters', (t) => {
	t.plan(3)

	function foo(x = 11, y = 31) {

		return x + y;
	}

	let b = foo(5,6);
	let c = foo();
	let d = foo(0, 22);

	t.is(b, 11); // returns 5+6=11
	t.is(c, 42); // Returns default values
	t.is(d, 22); // 22 Correct use of zero
});

test('Default value expressions', (t) => {
	t.plan(3)

	function bar(val) {

		return y + val;
	}

	function foo(x = y + 3, z = bar( x )) {
		return [x, z];
	}

	var y = 5;
	
	t.same(foo(), [8, 13]);
	t.same(foo(10), [10,15]);

	y = 6;
	
	t.same(foo(undefined, 10), [9, 10]);

});