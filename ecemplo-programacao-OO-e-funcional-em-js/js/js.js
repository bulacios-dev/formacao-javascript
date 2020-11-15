//programação funcional
function sejaBemVindo(){
    console.log("Seja bem vindo a formação JavaScript Mestre Jedi!!!");
}

console.log("Chamando a função seja bem vindo sejaBemVindo():");
sejaBemVindo();

//POO
var objProfessor = {
    nome: "Prof. Madson Aguiar",
    curso: "Formação JavaScript Mestre Jedi!!!! :)",
    ministrarAula: function(){
        console.log("Ministrando aula de JavaScript");
    }
}

console.log("vendo o objeto Professor:");
console.log(objProfessor);

console.log("Acessando propriedades do objeto: objProfessor.nome e objProfessor.curso");
console.log(objProfessor.nome);
console.log(objProfessor.curso);

console.log("Chamando o metodo do objeto professor! objProfessor.ministrarAula()");
objProfessor.ministrarAula();