let content = document.getElementById('ajax-content')

//video 4 a partir dos 15 min
function fetchContent(el){ //Essa função pega o conteúdo e joga dentro da DIV
    let view = el.getAttribute('a-view');
    let folder = el.getAttribute('a-folder');
    fetch(`/ajax/${folder}/${view}.html`) //faz requisção ajax utilizando o método fetch *Pesqueisar como fazer essa requição, porque 
    //ela não está funcionado 
    .then(response => {
        let html = response.text()
        return html
    })
    .then(html =>{
        // console.log(html)
        content.innerHTML = html;
    })
}


