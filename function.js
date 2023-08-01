let paragraf = document.querySelector('p');
paragraf.style.backgroundColor = 'yellow';

botao.addEventListener('click', adiciona);


function adiciona(){
    
    let entrada = document.getElementById('mostrarNome');

    entrada.innerHTML = nome.value;
    
    console.log(entrada);


}