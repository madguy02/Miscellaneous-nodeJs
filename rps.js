


var choice = function(choice1)
{
	prompt("enter your choice");
};

var compchoice = Math.random();
if (compchoice > 0.44)
	{
		compchoice = "rock";
	}

else if (compchoice <=0.78)

	{
		compchoice = "scissors";

	}

else
{
	compchoice = "paper";

}
var compare = function (choice1,choice2)
{
	if (choice == choice2)

		{
			return "there is a tie";

			}
		if (choice1 == "rock")
		{
			if (choice2 == "scissors")
			{
				return "rock wins";


			}
			else
			{
				return "paper wins";


			}
		
		}

		if (choice1 =="scissors")
			{
				if (choice2 == "paper")
					{
						return " scissors wins"


					}
				else
				{
					return "rock wins";

				}

			}

			if (choice1 == "paper")
			{
				if (choice2 == "scissors")
				{
					return "scissors wins";


				}
				else
				{
					return "paper wins"


				}


			}


		}


};

compare (userchoice,compchoice);
