const delay = require('./delay');

const callback = () => 5 + 5;

describe('delay', () => {
	test('корреткный вывод', async () => {
		const sum = await delay(callback, 1000)
		expect(sum).toBe(10)
	});

});
