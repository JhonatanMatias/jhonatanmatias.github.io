//var myHeading = document.querySelector('h1');
//myHeading.innerHTML = 'Ola mundo';
var minhaImagem = document.querySelector('img');
minhaImagem.onclick = function(){
	var meuSrc = minhaImagem.getAttribute('src');
	if(meuSrc === 'imagens/HTML5_logo.png'){
		minhaImagem.setAttribute('src','imagens/javascript_logo.png');
	}
	else{
		minhaImagem.setAttribute('src','imagens/HTML5_logo.png');
		}
}

var meuBotao = document.querySelector('button');
var meuCabecalho = document.querySelector('h1');


function mudaUsuarioNome(){
	var meuNome = prompt('por favor entre seu nome: ');
	localStorage.setItem('nome',meuNome);
	meuCabecalho.innerHTML = 'HTML5,' + meuNome;
}

if(!localStorage.getItem('nome')){
	mudaUsuarioNome();
}
else {
	nomeStore = localStorage.getItem('nome');
	meuCabecalho.innerHTML = 'HTML5,'+ nomeStore;
}

meuBotao.onclick = function(){
	mudaUsuarioNome();
}

