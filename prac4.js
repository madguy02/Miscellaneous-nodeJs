function checking (amount){

this.balance = amount;
this.withdraw = withdraw;
this.deposit = deposit;
this.toString = toString;

}

function deposit(amount){

	this.balance+=amount;

}

function withdraw(amount){

	if (this.balance<=amount)
	{
			this.balance-=amount;

	}
	else
	{
			console.log("insufficient funds");

	}

}

function toString(){
	return "Balance" + this.balance;

}

var account  = new checking(5000);
account.deposit(1000);
console.log(account.deposit);
account.withdraw(500);
console.log(account.withdraw);
