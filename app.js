class worker{
	//String = 'name';	
	//String = surname;
	//String = hourRate;
	//String = hours;

	conconstructor(name, surname, hourRate, hours){
		this.name = name;
		this.surname = surname;
		this.hourRate = hourRate;
		this.hours = hours;
	}
	getSalary(hourRate, hours){
		return(this.hourRate * this.hours)
	}
}

let worker = new worker(Ion, 'Creangă', 10, 176);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.hourRate);
console.log(worker.hours);
//console.log(worker.getSalary());
