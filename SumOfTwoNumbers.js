// Simple script for finding if any two numbers in an array add up to a chosen value (using javascript). No concern was given for O(n)
var evalArray = [2, 0, 4, 6, 8, 9]; //values to evaluate
var sum = 8; //the chosen value that must be added up to

var loopTwoNumbers = function(evalArray) { 
for (var i = 0, j = 1; j < evalArray.length; j++) {
	var hasSum = sumOfTwoNumbers(evalArray[i], evalArray[j], sum);
		console.log(hasSum);
		if (evalArray.length - 1 == j) {
			j = i + 1;
			i++;
		}
	}
};

var sumOfTwoNumbers = function(first, second, sum) {
	if (first + second == sum) {
		return true;
	} else {
		return false;
	}
};

loopTwoNumbers(evalArray);
