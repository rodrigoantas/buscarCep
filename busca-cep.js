import ValidateCpf from './validar-cpf.js'

const cpf = document.querySelector('#cpf')
const validateCpf = new ValidateCpf(cpf).init();


export default function buscaCep () { 

const texto = document.querySelector('#endereco');
const btn = document.querySelector('#button');
const paragraph = document.querySelector('p');


btn.addEventListener('click', addValue);

function addValue(event) {
  let valor = texto.value.replaceAll(/\D/g, '')
  return buscaCep(valor);
}

function buscaCep(cepUsuario) {
  fetch(`https://viacep.com.br/ws/${cepUsuario}/json/`)
  .then(r => {
    r.json()
    .then(body => {
      paragraph.innerText = `
      O seu cpf é ${validateCpf.element.value}.
      O seu cep é ${body.cep}. 
      Seu bairro é ${body.bairro}, Sua rua é ${body.logradouro}. 
      Sua cidade e estado é ${body.localidade}, ${body.uf}. 
      Seu ddd é ${body.ddd}.`
    })
  })
}
}








