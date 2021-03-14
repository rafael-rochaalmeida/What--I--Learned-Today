const botao = document.querySelector('[data-analisar="analise"]');

let exibirGrafico = document.querySelector('[data-mensagem="grafico"]');
let mensagem = document.querySelector('[data-mensagem="mensagem_texto"]');
let qtAulasCurso;
let qtAulasCursoAssistidas;

botao.addEventListener('click', seletora);

function seletora(qtAulasCurso, qtAulasCursoAssistidas){
      qtAulasCurso = document.querySelector('[data-aula="possui"]').value;
      qtAulasCursoAssistidas = document.querySelector('[data-aula="assistidas"]').value;
    //  console.log(qtAulasCurso, qtAulasCursoAssistidas);
     calculo()
}


function calculo(qtAulasCurso, qtAulasCursoAssistidas) {
    console.log(qtAulasCurso, qtAulasCursoAssistidas);
    var resultado = parseInt(qtAulasCursoAssistidas / qtAulasCurso) * 100;
    grafico();
};

function grafico(resultado) {
    exibirGrafico.style.width = resultado;
    exibirGrafico.style.height = '200px';
    exibirGrafico.style.background = "red";
};





