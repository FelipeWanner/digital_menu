var abre = document.getElementsByClassName("titulo-menu");
var i;

for (i=0; i < abre.length; i++) {
	abre[i].addEventListener("click", function(){

		 /* Função que faz os itens do painel aparecerem */
		var painel = this.nextElementSibling;
		if (painel.style.display === "block") {
	      	painel.style.display = "none";
	    } else {
	      	painel.style.display = "block";
	    }

	    /* Função que faz o scroll descer devagar */
	    if (painel.style.maxHeight) {
      		painel.style.maxHeight = null;
    	} else {
      		painel.style.maxHeight = painel.scrollHeight + "px";
    	}

    	/* funcao que adiciona a classe "ativado" no lugar de "titulo menu" para alternar os triangulos do accordion */

    	this.classList.toggle("ativado")
	});
}