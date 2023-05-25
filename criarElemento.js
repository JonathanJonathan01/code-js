(function(){
    var nameUser = "Jonathan"
    //const elemento = document.querySelector('.top-bar p')
  
    if(nameUser){
        
        //criar elemento
        const topBar = document.createElement('div')
        //criar classe
        topBar.className = 'top-bar'
        //criar pargrafo
        topBar.innerHTML = `<p>olá, ${nameUser}</p>`
        //selecionar elemento pai
        const elementoPai = document.querySelector('.hero')
        //inserindo elemento no DOM
        elementoPai.insertBefore(topBar, elementoPai.firstElementChild)



        
    }

   

})()