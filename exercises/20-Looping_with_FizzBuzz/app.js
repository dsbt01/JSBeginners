function fizzBuzz() {  
	// Your code here
	for (var i = 1; i <= 100; i++)
	{
		var resultFizz = IsMultipleOf(i,3) ? 'Fizz' : '';
		var resultBuzz = IsMultipleOf(i,5) ? 'Buzz' : '';
		if (resultBuzz === '' && resultFizz === '')
		{
			console.log(i);
		}
		else
		{
			console.log(resultFizz + resultBuzz);
		}
	}
}

function IsMultipleOf(numberToInvestigate, numberMultipleOf)
{
	//x and y are both integers
	var remainder = numberToInvestigate % numberMultipleOf;
	if (remainder == 0){
		return true;
	} 
	else 
	{
		return false;
	}
}

fizzBuzz();