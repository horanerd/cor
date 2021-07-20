
function escolherCor(){

    const corSeletor = document.querySelector("#colorEscolher")
    const enviar = document.querySelector(".buttonCor")
    
    const body = document.querySelector('body')
    
    
    function enviarCor(){
    
    
        const backgroundEscolhido = corSeletor.value
        body.style.background = backgroundEscolhido
    
    
    }
    
    enviar.addEventListener('click', enviarCor)
    
    }
    
    escolherCor()