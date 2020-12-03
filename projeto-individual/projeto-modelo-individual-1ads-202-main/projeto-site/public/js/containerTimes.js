const corinthians = document.querySelector('.corinthians');
const palmeiras = document.querySelector('.palmeiras');
const saoPaulo = document.querySelector('.sao_paulo');
const santos = document.querySelector('.santos');


palmeiras.classList.add('sumir');
saoPaulo.classList.add('sumir');
santos.classList.add('sumir');
corinthians.classList.add('sumir');


function exibirCorinthians(){
    corinthians.classList.remove('sumir')
    palmeiras.classList.add('sumir');
    saoPaulo.classList.add('sumir');
    santos.classList.add('sumir');
}

function exibirPalmeiras(){
    corinthians.classList.add('sumir')
    palmeiras.classList.remove('sumir');
    saoPaulo.classList.add('sumir');
    santos.classList.add('sumir');
}

function exibirSantos(){
    corinthians.classList.add('sumir')
    palmeiras.classList.add('sumir');
    saoPaulo.classList.add('sumir');
    santos.classList.remove('sumir');
}


function exibirSaoPaulo(){
    corinthians.classList.add('sumir')
    palmeiras.classList.add('sumir');
    saoPaulo.classList.remove('sumir');
    santos.classList.add('sumir');
}