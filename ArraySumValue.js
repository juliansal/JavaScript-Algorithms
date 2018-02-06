//checks if two numbers in a given array are the sum of a given value
// x + y = z
// 2 + y = 8
// 2 + y = 8 + (-2)
// --------------^
// var y = 8 + (-2)

var xArr = [10,20,40,40,100,10,20,40,80,0,60,60];
var z = 8;
for(var i = 0; i < xArr.length; i++) {
  var y = z + (-xArr[i]);
  if(xArr.includes(y)) {
      if(xArr.indexOf(y) != i || xArr.includes(y, i+1)) {
      	console.log(xArr[i]);
      }
  }
}
