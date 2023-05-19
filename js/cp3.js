"use strict";

//CRIANDO OBJETOS
const usuario1 = {
    nomeUsuario : "silvio",
    sobrenomeUsuario : "aranha",
    emailUsuario :"silvio@email.com",
    senhaUsuario : "000000",
    corfirmaSenha : "000000"
}

const usuario2 = {
    nomeUsuario : "renato",
    sobrenomeUsuario : "araujo",
    emailUsuario :"renato@email.com",
    senhaUsuario : "123456",
    corfirmaSenha : "123459"
}

//LISTA DE USUÁRIOS
let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

addEventListener("click", (evento)=>{
     
    let nomeInput = document.querySelector("#idNm"); 
    let sobrenomeInput = document.querySelector("#idSobrenome");
    let emailInput = document.querySelector("#idEmail");
    let passInput = document.querySelector("#idPass");
    let corfirmaInput = document.querySelector("#idConfirmar_passaword");

        if(evento.target.id == "btnSubmit"){
        
        try{
                listaDeUsuarios.forEach((usuario)=>{

                    if(nomeInput.value == usuario.nomeUsuario && passInput.value == usuario.senhaUsuario && sobrenomeInput.value == usuario.sobrenomeUsuario && emailInput.value == usuario.emailUsuario && corfirmaInput.value == usuario.corfirmaSenha ){
                        throw "USUÁRIO VALIDADO!";
                    
                        
                    }
                });

                 throw "USUÁRIO OU SENHA INCORRETOS!";
    }catch(err){
        if(err == "USUÁRIO VALIDADO!"){
            console.log("USUÁRIO VALIDADO!")
        }else{
            console.log("USUÁRIO OU SENHA INCORRETOS!");
        }
    }

        }
});


const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const elementsToToggle = document.getElementsByClassName('box');

darkModeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  for (let i = 0; i < elementsToToggle.length; i++) {
    elementsToToggle[i].classList.toggle('dark-mode');
  }
});
