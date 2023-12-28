const validateValue = require('./validate-value');

test('testValidate', () => {
	expect(validateValue(50)).toBe(true)
});

describe('validateValue', () => {
	test('Валидное', () => {
		expect(validateValue(50)).toBe(true)
	});
	test('меньше валидного', () => {
		expect(validateValue(-12)).toBe(false)
	});
	test('больше валидного', () => {
		expect(validateValue(5230)).toBe(false)
	});
	test('value = 0', () => {
		expect(validateValue(0)).toBe(true)
	});
	test('value = 100', () => {
		expect(validateValue(100)).toBe(true)
	});
});
