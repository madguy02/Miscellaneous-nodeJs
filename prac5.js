//Queue process in javascript.
//this is a data binding process here.
//lets see the implementation here

function Queue() {
	this.datastore = [];
	this.enqueue  = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;

}

function enqueue(element){

this.datastore.push(element);

}

function dequeue(element) {
return this.datastore.shift();

}

function front(){

return this.datastore[0];

}

function back(){
return this.datastore[this.datastore.length-1]

}

function toString(){
var retStr = "";
for (var i = 0;i<this.datastore.length;++i){

	retStr+=this.datastore[i]+"\n";
}
	return retStr;

}

function empty(){
if (this.datastore.length ==0)
{
	return true;

}
else
{

	return false;
}

}

var q = new Queue();
q.enqueue ("fucker");
q.enqueue("sucker");
q.enqueue("licker");
q.enqueue("nigga");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log(q.front());
console.log(q.back());