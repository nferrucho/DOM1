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

export default checkComplete;

