function Volver() {
	location.href = "./Mensaje.html";
}

function Mostrar(identidad, identidadBoton) {
	if (document.getElementById(identidad).classList.contains("mostrar")) {
		//contrae el texto si está expandido y lo expande en caso contrario
		document.getElementById(identidad).classList.remove("mostrar");
		document.getElementById(identidadBoton).textContent = "+";
	} else {
		document.getElementById(identidad).classList.add("mostrar");
		document.getElementById(identidadBoton).textContent = "-";
	}
}

var nivelMaximo = 10;

function MostrarTodos() {
	for (nivel = 1; nivel <= nivelMaximo; nivel++) {
		var elmnt = document.getElementsByClassName("nivel" + nivel);
		var i;
		for (i = 0; i < elmnt.length; i++) {
			elmnt[i].classList.add("mostrar");
			elmnt[i].firstElementChild.textContent = "-";
		}
	}
}

function OcultarTodos() {
	for (nivel = 1; nivel <= nivelMaximo; nivel++) {
		var elmnt = document.getElementsByClassName("nivel" + nivel);
		var i;
		for (i = 0; i < elmnt.length; i++) {
			elmnt[i].classList.remove("mostrar");
			elmnt[i].firstElementChild.textContent = "+";
		}
	}
}
