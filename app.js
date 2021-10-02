function CarregarFilmes(){
    //array --> variável com subdivisões(indices)
    let filmes = ["images/chegada.png", "images/yesterday.png", "images/escola.png", "images/parasita.jpg", "images/birdbox.jpg"]

    //laço de repetição
    for(let controle = 0 ; controle < 6 ; controle + 1 ){
        document.querySelector(".lista-filmes").innerHTML +- filmes [controle] + ">"

    }
}

