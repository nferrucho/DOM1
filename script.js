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
    // atrapar el input
    const value = input.value;
    
    task = document.querySelector("[data-task]");
    input.value = "";
    
    //backticks : pegamos el <div> de lo nuevo a tratar
    //replazamo el texto por value como valor nuevo
    const content = `<div>
       <i class="far fa-check-square icon"></i>
       <span class="task">${value}</span>
       </div>
       <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //ajustando el nuevo div al html
    task.innerHTML = content;

    console.log(task);

}

console.log(btn);

btn.addEventListener("click",createTask);

//
