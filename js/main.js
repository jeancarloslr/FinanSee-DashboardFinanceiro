//starting with dark/light theme.
const toggle = document.querySelector('#theme-toggle');

//starting to open the new transation modal
const btnNewTransation = document.querySelector('.btn-nova-transacao')
const modal = document.querySelector('.modal-nova-transacao')
const btnCloseModal = document.querySelector('.close-transation')

//form getting data
const formTransacao = document.querySelector('#form-transacao');
const transacoes = [];

formTransacao.addEventListener('submit', (event) =>{
   event.preventDefault();

   const dados = new FormData(formTransacao);

   //objeto, cada objeto tem propriedades com valores
   const transacao = {
      descricao: dados.get('descricao'),
      valor: dados.get('valor'),
      tipo: dados.get('tipo'),
      categoria: dados.get('categoria'),
      data: dados.get('data')
   };

   transacoes.push(transacao)
   console.log(transacoes);

});

btnNewTransation.addEventListener('click', ()=>{
   modal.showModal()
});

btnCloseModal.addEventListener('click', ()=>{
   modal.close();
});

 toggle.addEventListener('change', ()=>{
   document.body.classList.toggle("light-theme")
 })



