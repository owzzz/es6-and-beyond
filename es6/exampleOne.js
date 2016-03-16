'use strict';

export default class exampleOne {
	constructor () {
		this.name = 'Blocked Scope Declarations';
	}
	letDeclarationFunc () {
		let a = 2;

		{
			let a = 3;

			return a;
		}

		return a;
	}

}