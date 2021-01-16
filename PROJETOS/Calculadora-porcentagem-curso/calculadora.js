const botao = document.getElementsByTagName('button');

console.log(botao);

botao.addEventListener("click", seletora);


function seletora(qtAulasCurso, qtAulasCursoAssistidas, grafico, mensagem){
     qtAulasCurso = document.querySelector('[data-aula="possui"]');
     qtAulasCursoAssistidas = document.querySelector('[data-aula="assistidas"]');
     grafico = document.querySelector('data-mensagem="grafico"');
     mensagem = document.querySelector('data-mensagem="mensagem_texto"');
    calculo();
};

function calculo(resultado){
     resultado = parseInt(qtAulasCursoAssistidas / qtAulasCurso) * 100;
    grafico();
};

function grafico(){
    grafico.style.width = resultado;
    grafico.style.height = '200px   ';
    grafico.style.background = "red";
};

