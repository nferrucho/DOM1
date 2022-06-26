// IIFE : para encapsular las funciones creadas
// y que no se vean en consola

( () => {
const btn = document.querySelector('[data-form-btn]');


//pasandolo a funcion flecha
//btn.addEventListener("click", function(evento){
//    evento.preventDefault();
//    console.log(evento);
//    


// usando metodos para llamado a la funcion 
const createTask = (evento) =>{
    evento.preventDefault();

    const input = document.querySelector('[data-form-input]');
    // atrapar el input
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    
    //adicionando la clase que forma el entorno del item
    task.classList.add('card');
    input.value = '';

    //creando <div> a partir de codigo
    const taskContent = document.createElement('div');

    const titleTask = document.createElement('span');
    titleTask.classList.add("task");
    titleTask.innerText = value;

    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    //backticks : pegamos el <div> de lo nuevo a tratar
    //replazamo el texto por value como valor nuevo
    const content = `
       <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //ajustando el nuevo div al html
    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);

};



btn.addEventListener("click", createTask);

//funcion para tomar las clases del <div> 
const checkComplete = () => {
    const i = document.createElement('i'); 
    i.classList.add('far','fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
};

const completeTask = (event) =>{
    
    //agregando una nueva clase
    const element = event.target;
    //element.classList.add('fas');
    //element.classList.remove(far);

    //otra forma es con toggle
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');


};
})();

