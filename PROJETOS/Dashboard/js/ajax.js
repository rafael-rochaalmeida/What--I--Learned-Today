let content = document.getElementById('ajax-content')

//video 4 a partir dos 15 min
function fetchContent(el){ //Essa função pega o conteúdo e joga dentro da DIV
    let view = el.getAttribute('a-view');
    let folder = el.getAttribute('a-folder');
    fetch(`/Dashboard/ajax/${folder}/${view}.html`)
    .then(response => {
        console.log(response)
        let html = response.text()
        return html
    })
    .then(html =>{
        content.innerHTML = html;
    })
}


