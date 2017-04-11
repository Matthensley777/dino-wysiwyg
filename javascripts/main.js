var dinoArray =[];

$.ajax('./db/dinosaurs.json').done(function(data){
	dinoArray = data.dinosaurs;
	makeDome(dinoArray);
}).fail(function(error){
	console.log("you've made a huge mistake", error);
});

function makeDome(myArrayToPrint) {
	 var myDomString = "";
	 for ( var i = 0; i < myArrayToPrint.length; i++) {
	 	myDomString += `<div class="dinoCard">`;
	 	myDomString += `<header><h1>${myArrayToPrint[i].type}</h1></header>`;
	 	myDomString += `<section>`;
	 	myDomString += `<img src="${myArrayToPrint[i].img}">`;
	 	myDomString += `<p class="bio">${myArrayToPrint[i].bio}</p>`;
	 	myDomString += `<footer>${myArrayToPrint[i].info}</footer>`;
	 	myDomString += `</section>`;

	 	myDomString += `</div>`;
	 }
	 $("#dinosaurs").append(myDomString);
}

