"use strict";

//CRIANDO OBJETOS
const usuario1 = {
    nomeUsuario : "silvio",
    sobrenomeUsuario : "luiz",
    emailUsuario :" silvio@email.com",
    senhaUsuario : "00000",
    corfirmaSenha : "00000"
}

const usuario2 = {
    nomeUsuario : "erick",
    sobrenomeUsuario : "lucca",
    emailUsuario :" erick@email.com",
    senhaUsuario : "12345",
    corfirmaSenha : "12345"
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