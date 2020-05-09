async function iniciaContagem() {
	
    while(true)	{
		
		var cont = document.getElementById("contador");
		var novoValor = cont.value - 1;
		cont.value = novoValor;
		await sleep(1000);
	}
}

function sleep(milissegundos) {
	
  return new Promise(resolve => setTimeout(resolve, milissegundos));
}