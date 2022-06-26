const btn = document.querySelector("[data-form-btn]");

console.log(btn);

//pasandolo a funcion flecha
//btn.addEventListener("click", function(evento){
//    evento.preventDefault();
//    console.log(evento);
//    

// usando metodos para llamado a la funcion 
const createTask = (evento) =>{
    evento.preventDefault();
    console.log(evento);
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}

console.log(btn);

btn.addEventListener("click",createTask);

//
