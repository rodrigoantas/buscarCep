export default class ValidateCpf {
  constructor(element)  {
    this.element = element;
  }
  clean(cpf) {
    return cpf.replace(/\D/g, '')
  }
  construct(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
  }
  format(cpf) {
    const cpfLimpo = this.clean(cpf);
    return this.construct(cpfLimpo);
  }
  validate(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    return (matchCpf && matchCpf[0] === cpf);
  }
  validateOnChange(cpf) {
    if(this.validate(cpf.value)) {
      cpf.value = this.format(cpf.value);
      cpf.classList.add('valido');
      cpf.classList.remove('erro');
      cpf.nextElementSibling.classList.remove('active');
    } else {
      cpf.classList.add('erro');
      cpf.classList.remove('valido');
      cpf.nextElementSibling.classList.add('active');
    }
  }
  addSpanError() {
    const errorElement = document.createElement('span');
    errorElement.classList.add('error-text');
    errorElement.innerText = 'CPF Inválido';
    this.element.parentElement.insertBefore(errorElement, this.element.nextElementSibling);
  }
  //preicsa ser arrow function por causa do this
  addEvent() {
    this.element.addEventListener('change', () => {
      this.validateOnChange(this.element)
    } )
  }
  init() {
    this.addSpanError()
    this.addEvent()
    return this
  }
}