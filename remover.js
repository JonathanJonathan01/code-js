(function(){
    var nameUser = ""
    const elemento = document.querySelector('.top-bar p')
  
    if(nameUser){
        elemento.textContent += nameUser
    }else{
        //elemento.remove()
        const elementoPai = elemento.parentElement
        
        elementoPai.parentElement.removeChild(elementoPai)

        //elemento.parentElement.style.display = "none"

    }

    const remover = document.querySelector('.content-header h2')
    const elementoPaiRemover = remover.parentElement

    elementoPaiRemover.parentElement.removeChild(elementoPaiRemover)

    

    

})()