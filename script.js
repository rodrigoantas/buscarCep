

const texto = document.querySelector('#endereco');
const btn = document.querySelector('#button');
const primeiroH1 = document.querySelector('h1');


btn.addEventListener('click', adicionarValor);

function adicionarValor(event) {
  const valor = texto.value;
  buscaCep(valor);
}

function buscaCep(cepUsuario) {
  fetch(`https://viacep.com.br/ws/${cepUsuario}/json/`)
  .then(r => {
    r.json()
    .then(body => {
      primeiroH1.innerText = `O seu cep é ${body.cep}. 
      Seu bairro é ${body.bairro}, Sua rua é ${body.logradouro}. 
      Sua cidade e estado é ${body.localidade}, ${body.uf}. 
      Seu ddd é ${body.ddd}.`
    })
  })
}









