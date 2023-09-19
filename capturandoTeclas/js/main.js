document.addEventListener("keydown", function(event) {
    var exibindo = document.getElementById("tecla")
    var teclaPressionada = event.key;

    if (teclaPressionada === "Keyboard") {
        if (teclaPressionada === "ArrowUp") {
            `${teclaPressionada}`
        }
        exibindo.innerText = `${teclaPressionada}`
    }else if (teclaPressionada === "ArrowDown") {
     exibindo.innerText = 'tecla seta para baixo foi pressionada' 
     }//else{
    //     exibindo.innerText = 'outra tecla foi pressionada'
    // }
})


