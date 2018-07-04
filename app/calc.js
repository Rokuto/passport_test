module.exports.sum = function (arr) {
	
	// JS reduce() applies a function against an accumulator and each element in the array (from left to right) to reduce it into a single value.
	// Array.reduce(callback[, initial_value]);
	
	const callback = (a, b) => a+b;
	let initial_value = 0;

	return arr.reduce( callback, initial_value );
}