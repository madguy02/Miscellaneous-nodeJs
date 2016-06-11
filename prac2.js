//to find the factorial of a number using a straight foreward brute force algorithm

function fact(number){
	var product = 1;
	for (var i = number;i>=1;i--)
	{
			product*=i;


	}

		return product;

}

console.log(fact(4));
console.log(fact(10));

//this algo is to just show javascript functions work