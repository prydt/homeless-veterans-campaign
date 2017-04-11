
function open(){
	var header = document.getElementById("header");
	if(header.className === "top"){
		header.className += " responsive";
	} else {
			header.className = "top";
	}
}
