var persons = [
{
"name": "john",
"age": "23"
},
{
"name": "harry",
"age": "21"
},
{
"name": "jack",
"age": "25"
}
];


var byage = persons.slice(0);
byage.sort(function(a,b) {
    return a.age - b.age;
});
console.log('by age:');
console.log(byage);


var byname = persons.slice(0);
byname.sort(function(a,b){
	var x = a.name.toLowerCase();
	var y = b.name.toLowerCase();
	return x<y ?-1 : x>y ? 1:0;

});

console.log('by name:');
console.log(byname);



