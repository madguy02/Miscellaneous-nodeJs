function Patient(name,code){
	this.name = name;
	this.code = code;

}

function dequeue(){
	var priority = this.datastore[0].code;
	for (var i = 1;i<datastore.length;++i){
			if (this.datastore.code<priority)
			{
				priority = i;


			}


	}
		return this.datastore.splice(priority,1);

}