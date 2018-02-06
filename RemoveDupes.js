//removes duplicate items in an array without making a new array
for(var i = 0; i < xArr.length; i++) {
	if(xArr.includes(xArr[0]), 1) {
		xArr.push(xArr[0]);
		xArr.shift();
	}
	xArr.shift();
}

console.log(xArr);
