import buscaCep from './busca-cep.js'
import ValidateCpf from './validar-cpf.js'

const cpf = document.querySelector('#cpf')
const validateCpf = new ValidateCpf(cpf).init();





buscaCep();