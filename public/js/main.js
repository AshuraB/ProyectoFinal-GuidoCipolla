/*Js Modal*/
/*Agrego un evenlistener al click, si da a una de las imagenes dentro de la gallery activa el modal de boostrap5*/
document.addEventListener('click', function (e){
    if(e.target.classList.contains('gall-item')){
        let src = e.target.getAttribute('src');
        document.querySelector('.modal-img').src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})