const delay = (callback, time) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(callback()), time)
	})
}

module.exports = delay