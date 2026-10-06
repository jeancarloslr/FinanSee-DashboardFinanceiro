//starting with dark/light theme.
const toggle = document.querySelector('#theme-toggle');

//starting to open the new transation modal
const btnNewTransation = document.querySelector('.btn-nova-transacao')
const modal = document.querySelector('.modal-nova-transacao')
const btnCloseModal = document.querySelector('.close-transation')

//tabela
const tabelaTransacoes = document.querySelector('tbody');

//form getting data
const formTransacao = document.querySelector('#form-transacao');

//getting data of local storage
const dadosSalvos = localStorage.getItem('transacoes');
const transacoes = dadosSalvos
    ? JSON.parse(dadosSalvos)
    : [];

   console.log(transacoes);

formTransacao.addEventListener('submit', (event) =>{

   event.preventDefault();

   const dados = new FormData(formTransacao);

   //objeto, cada objeto tem propriedades com valores
   const transacao = {
      descricao: dados.get('descricao'),
      valor: parseFloat(dados.get('valor')),
      tipo: dados.get('tipo'),
      categoria: dados.get('categoria'),
      data: dados.get('data')
   };

   transacoes.push(transacao)
   //setting into local storage
   localStorage.setItem('transacoes', JSON.stringify(transacoes));   
});

transacoes.forEach((transacao) => {
   
   const linha = document.createElement("tr");
   const dataCont = document.createElement("td");
   const descricaoCont = document.createElement("td");
   const categoriaCont = document.createElement("td");
   const tipoCont = document.createElement("td");
   const valorCont = document.createElement("td");
  
   dataCont.textContent = transacao.data;
   descricaoCont.textContent = transacao.descricao;
   valorCont.textContent = transacao.valor;
   tipoCont.textContent = transacao.tipo;
   categoriaCont.textContent = transacao.categoria;

   linha.appendChild(dataCont);
   linha.appendChild(descricaoCont);
   linha.appendChild(categoriaCont);
   linha.appendChild(tipoCont);
   linha.appendChild(valorCont);

   tabelaTransacoes.appendChild(linha)
});

btnNewTransation.addEventListener('click', ()=>{
   modal.showModal()
});

btnCloseModal.addEventListener('click', ()=>{
   modal.close();
});

toggle.addEventListener('change', ()=>{
  document.body.classList.toggle("light-theme")
});



