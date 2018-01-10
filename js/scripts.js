var female = ["Asia", "Halina", "Agnieszka", "Alicja", "Magda"];

	male = ["Robert","Paweł", "Artur", "Rafał", "Olek"];


	both = female.concat(male);


	newName = "Zenek";


	if(both.indexOf(newName) === -1) {

		both.push(newName);
	}


	console.log(both);