//removes duplicate items in an array by making a new array
var newArr = [];
for(var i = 0; i < xArr.length; i++) {
	if(newArr.includes(xArr[i], 0)) {
		;
	} else {
		newArr.push(xArr[i]);
	}
}
