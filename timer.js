
// atribuicoes inicias
var todosTimersParados = true;

function alternaEstadoContagem() {
      
    if(todosTimersParados) {
        iniciarContagem();
        //alterar texto do botao para "Parar"
    } else {
        pararContagem();
        //alterar texto do botao para "Play!"
    }
}

function pararContagem() {
 
    todosTimersParados = true;
}

async function iniciarContagem() {
	
    todosTimersParados = false;
    
    while(!todosTimersParados)	{
		
		var cont = document.getElementById("contador");
		var novoValor = cont.value - 1;
		cont.value = novoValor;
		await sleep(1000);
	}
}

function sleep(milissegundos) {
	
    return new Promise(resolve => setTimeout(resolve, milissegundos));
}