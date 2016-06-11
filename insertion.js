//javascript implementation of insertion sort
//Write a program in JavaScript to sort following list in ascending order using Insertion Sort Algorithm.
// ascending order and descending order both implemented

function insertionSort(unsortedList){
		var len = unsortedList.length;
		for (var i = 0;i<len;i++){
				var tmp = unsortedList[i];
		for (var j= i-1;j>=0 && (unsortedList[j]<tmp);j--){

				unsortedList[j+1] = unsortedList[j];

		}
			unsortedList[j+1] = tmp;

		}


}

//for ascending order for (var j = i-1;j>=0 && (unsortedList[j]>tmp);j--)

var nums = [34, 23, 12, 45, 9, 1, 24];
insertionSort(nums);
console.log(nums);