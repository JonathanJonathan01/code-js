(function(){
       
// Buscar elemento pai
var elemento_pai = document.querySelector('.hero');

// Criar elemento
var titulo = document.createElement('h1');

console.log(titulo)

// Criar o nó de texto
var texto = document.createTextNode("Um título qualquer");

// Anexar o nó de texto ao elemento h1
titulo.appendChild(texto);

// Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
elemento_pai.insertBefore(titulo, elemento_pai.firstChild)


})()