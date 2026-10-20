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

RenderizarTabela();    
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

   RenderizarTabela();
});
   
function RenderizarTabela(){
   
   tabelaTransacoes.innerHTML = "";

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

   //tabela botão de excluir transação
   var btnExcluirTransacao = document.createElement("button");
   btnExcluirTransacao.innerHTML = '<img src="../assets/icons/delete.png" </img>';
   linha.appendChild(btnExcluirTransacao);
   btnExcluirTransacao.classList.add('btn-excluir');
   tabelaTransacoes.appendChild(linha)   

   btnExcluirTransacao.addEventListener('click', () =>{
      const index = transacoes.indexOf(transacao);
      transacoes.splice(index, 1);
      console.log(transacoes);
      
      localStorage.setItem('transacoes', JSON.stringify(transacoes));
      RenderizarTabela();
   });
});
}

btnNewTransation.addEventListener('click', ()=>{
   modal.showModal()
});

btnCloseModal.addEventListener('click', ()=>{
   modal.close();
});

toggle.addEventListener('change', ()=>{
  document.body.classList.toggle("light-theme")
});



