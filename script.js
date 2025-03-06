function toCase(text) {
	let lower = text.toLowerCase();
	let upper = text.toUpperCase();

	let ans = lower + "-" + upper;
	return ans;
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
