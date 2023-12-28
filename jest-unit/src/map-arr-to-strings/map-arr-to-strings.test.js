const MappArrToString = require('./map-arr-to-strings');

describe('MappArrToString', () => {
	test('Корректное значение', () => {
		expect(MappArrToString([1, 2, 3, 4, 5])).toEqual(['1', '2', '3', '4', '5']);
	});
	test('Мешанина', () => {
		expect(MappArrToString([1, 2, 3, 4, 5, null, undefined, true, 'asd'])).toEqual(['1', '2', '3', '4', '5']);
	});
	test('Пустой массив', () => {
		expect(MappArrToString([])).toEqual([]);
	});
	test('Отрицание', () => {
		expect(MappArrToString([1, 2, 3, 4])).not.toEqual([]);
	});
});
