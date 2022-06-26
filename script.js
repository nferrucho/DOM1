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

    const list = document.querySelector("[data-list]");
    
    const task = document.createElement("li");
    
    //adicionando la clase que forma el entorno del item
    task.classList.add('card');
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

    list.appendChild(task);
    console.log(task);

}

console.log(btn);

btn.addEventListener("click",createTask);

//
