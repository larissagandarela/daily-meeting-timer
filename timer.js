
// atribuicoes inicias
var todosTimersParados = true;
var indiceDoContador = 0;

function alternaEstadoContagem(indice) {
      
    if(todosTimersParados) {
        iniciarContagem(indice);
        //alterar texto do botao para "Parar"
    } else {
        pararContagem();
        //alterar texto do botao para "Play!"
    }
}

function pararContagem() {
 
    todosTimersParados = true;
}

async function iniciarContagem(indice) {
	
    todosTimersParados = false;
    
    while(!todosTimersParados)	{
		
		var cont = document.getElementById("contador-" + indice);
		var novoValor = cont.value - 1;
		cont.value = novoValor;
		await sleep(1000);
	}
}

function sleep(milissegundos) {
	
    return new Promise(resolve => setTimeout(resolve, milissegundos));
}

function adicionarContador() {
    
    indiceDoContador = indiceDoContador + 1;
    
    //pega o template e o container
    var template  = document.getElementById("timer-template");
    var container = document.getElementById("timer-container")
    
    //duplica o template
    var clone = template.cloneNode(true);
    
    var contadoresDentroDoClone = clone.getElementsByClassName("contador");
    var contadorDentroDoClone = contadoresDentroDoClone[0];
    contadorDentroDoClone.id = "contador-" + indiceDoContador;
    
    var botoesDentroDoClone = clone.getElementsByClassName("btn_play_pause");
    var botaoDentroDoClone = botoesDentroDoClone[0];
    botaoDentroDoClone.setAttribute("onClick", "alternaEstadoContagem(" + indiceDoContador + ")");
    
    container.appendChild(clone);
}





















