(function(){
    
    const usuario = "wilddy"
    const saudacao = document.querySelector('.top-bar #paragrafo')
    
    if(usuario){
        console.log('valido')
        saudacao.textContent = saudacao.textContent + usuario
    }else{
        saudacao.parentElement.style.display = "none"
    }
    
    const titulo = document.querySelector('.hero-content h1')
    console.log(titulo)
    


})()

/*function alteraImagem(){
    document.querySelector('.hero').style.backgroundImage = "url('../imagens/bg-4.jpg')";
}

function retornaImagem(){
    document.querySelector('.hero').style.backgroundImage = "url('../imagens/bg-3.jpg')";
}

function clicar(){
    var doc = document.querySelector('.hero-content')
    doc.innerHTML = "<h1>MELHOR PROG DO MUNDO</h1>"
}*/