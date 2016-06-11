//example of recursion in javascript

function fact(number)
{
		if (number==1)
		{

			return number;
		}
else
{

	return (number*fact(number-1));
}

}

console.log(fact(12));