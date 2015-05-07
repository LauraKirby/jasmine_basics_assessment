module.exports = { 
	letterGrader: function (testScore){
		Math.floor(testScore); 
			if (testScore <= 59 && testScore > 60){
				return 'F'; 
			}
			else if (testScore <= 69 && testScore > 70) {
				return 'D'; 
			}
			else if (testScore <= 79 && testScore > 80) {
				return 'C'; 
			}
			else if (testScore <= 89 && testScore > 90) {
				return 'B'; 
			}
			else if (testScore <= 100 && testScore > 60) {
				return 'A'; 
			}
			else {
				return "Input a number between 0 and 100"
			}
	},
	averageScore: function(arr){
		var sum = 0; 
		for (var i = 0; i<arr.length; i++) {
			sum += parseInt(arr[i], 10); 
		}
		return sum/arr.length; 
		},
	medianScore: function(arr){
		var length = arr.length;
		var median; 
		if (length%2 === 0) {
			median = "nothing for now";
		}
		else if (length%2 !== 0){
			arrLength = arr.length;
			arrLengthHalf = arr.length/2;
			Math.floor(arrLengthHalf)
			medianIndex = arrLengthHalf +1; 
			return medianIndex;
		}
	}

}

