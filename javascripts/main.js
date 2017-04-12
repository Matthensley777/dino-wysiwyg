
$.ajax('./db/dinosaurs.json').done(function(data){
	var dinoArray = data.dinosaurs;
	makeDom(dinoArray);
}).fail(function(error){
	console.log("you've made a huge mistake", error);
});

function makeDom(myArrayToPrint) {
		if(counter % 3 === 0) {
myDomString += `<div class="row"`;
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
	 	counter++;
	 	if(counter % 3 === 0) {
	 		myDomString+= `</div>;`
	 	}
	 }
	 $("#dinosaurs").append(myDomString);
}

$("#dinosaurs").on("click", ".dinoCard", function(e){
	$("dinoCard").removeClass("dottedBorder");
	$(this).addClass("dottedBorder");
	$("#textbox").val("").focus();
});

$("#textbox").keyup(mirrorText);

function mirrorText(e) {
	var selectedCard = $(".dottedBorder");
	var bioTyped = $("#textbox").val();
	var bio = $(".dottedBorder").find("p.bio");
	bio.html(bioTyped);

	if (e.keyCode === 13) {
		$("#textbox").val("");
	}

}