function A(Number) {
	Number *= 3;
	return Number;
}

function B(Number) {
	Number += 3;
	return Number;
}

function C(Number) {
	Number /= 3;
	return Number;
}

var Output = A(B(C(3))); // Output = 12