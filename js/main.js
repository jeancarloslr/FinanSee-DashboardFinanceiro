//starting with dark/light theme.
const toggle = document.querySelector('#theme-toggle');

//starting to open the new transation modal
const btnNewTransation = document.querySelector('.btn-nova-transacao')
const modal = document.querySelector('.modal-nova-transacao')
const btnCloseModal = document.querySelector('.close-transation')


btnNewTransation.addEventListener('click', ()=>{
   modal.showModal()
});

btnCloseModal.addEventListener('click', ()=>{
   modal.close();
});

 toggle.addEventListener('change', ()=>{
   document.body.classList.toggle("light-theme")
 })



