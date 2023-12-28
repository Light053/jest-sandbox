const axios = require('axios');
const mapArrToString = require('../map-arr-to-strings/map-arr-to-strings');

const getData = async () => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		const result = response.data;
		const userId = result.map(user => user.id);

		return mapArrToString(userId);
	} catch (error) {

	}
};

getData()
	.then(res => console.log(res))

module.exports = getData;
