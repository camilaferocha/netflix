function CarregarFilmes(){
    //array --> variável com subdivisões(indices)
    let filmes = [
        "images/chegada.png" , 
        "images/yesterday.png" , 
        "images/escola.png" , 
        "images/parasita.jpg" , 
        "images/birdbox.jpg"
    ]

    let totalFilmes = filmes.length

    //laço de repetição
    for(let i = 0 ; i < totalFilmes ; i++){
        document.querySelector(".lista-filmes").innerHTML += "<img src="+ filmes[i] + ">"
    }
}

