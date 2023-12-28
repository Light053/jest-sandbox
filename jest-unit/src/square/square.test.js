const square = require('./square')

describe('square', () => {
	// перед каждым тестом
	beforeEach(() => {
		// добавить в бд
	});

	// один раз перед всеми тестами
	beforeAll(() => { });

	test('корректное значение', () => {
		//expect(Square(2)).toBe(4);
		//expect(Square(2)).toBeLessThan(5);
		//expect(Square(2)).toBeGreaterThan(3);
		//expect(Square(2)).not.toBe(undefined);
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(2);
		expect(spyMathPow).toBeCalledTimes(1);
	});

	test('второй кейс', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(1);
		expect(spyMathPow).toBeCalledTimes(0);
	});


	afterEach(() => {
		jest.clearAllMocks()
	});

	afterAll(() => { });
});
