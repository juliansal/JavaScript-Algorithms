//removes duplicate items in an array by making a new array
var xArr = [10,20,40,40,100,10,20,40,80,0,60,60];
var newArr = [];
for(var i = 0; i < xArr.length; i++) {
	if(newArr.includes(xArr[i], 0)) {
		;
	} else {
		newArr.push(xArr[i]);
	}
}
