class Calculadora {
constructor(){
  this.operacao;
  this.visor;
  this.status;
} 
}

const calculadora = new Calculadora

const listaDeNumeros = Array.from(document.getElementsByClassName('numeros'))

listaDeNumeros.map((element) => {
element.addEventListener('click', (event) =>{
  calculadora.lerValores(event.target.value)
})
})

lerValores(valorDigitado) ;
    this.operacao.push(valorDigitado);
    
    this.visor.innerText = this.operacao.join("");
    

    handleOperacoes() ;
let resultado = eval( this.operacao.join("") )

this.visor.innerText = resultado;

this.operacao = [ result ]
