
    
    const txtEmail = document.getElementById('txtEmail')
    const msgRetorno = document.getElementById('newsletterFeedback')
    
    //console.log(email)

    function cadastrarEmail(){
        let email = txtEmail.value
        //console.log('cadastarEmail')
        msgRetorno.innerHTML = `o email ${email} foi cadastrado com sucesso`

    }

   
/*function validacaoEmail(field) {
usuario = field.value.substring(0, field.value.indexOf("@"));
dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

if ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
document.getElementById("newsletterFeedback").innerHTML="E-mail válido";
alert("E-mail valido");
}
else{
document.getElementById("newsletterFeedback").innerHTML="<font color='red'>E-mail inválido </font>";
alert("E-mail invalido");
}
}*/

    
   

