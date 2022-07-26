function carregar() {
document.querySelector('input#percurso').focus()
} 

function calcular() {
   let percurso = document.querySelector('input#percurso').value
   let consumoVeiculo = document.querySelector('input#consumo').value
   let precoCombustivel = document.querySelector('input#precoCombustivel').value
   let gasto = Number(percurso) / Number(consumoVeiculo) * Number(precoCombustivel)
   let resultado = document.querySelector('div#res')

   if (percurso.length < 1 || consumoVeiculo.length < 1 || precoCombustivel.length < 1) {
    return alert('Preencha todos os dados!')
   }

   resultado.innerHTML = `O gasto será de R$${gasto.toFixed(2)}!`
}

function limpar() {
   document.querySelector('input#percurso').value = ''
   document.querySelector('input#consumo').value = ''
   document.querySelector('input#precoCombustivel').value = ''
   document.querySelector('div#res').innerHTML = 'Gasto Total'
   carregar()
}

