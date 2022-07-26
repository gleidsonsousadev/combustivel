function carregar() {
document.querySelector('input#valorAbastecer').focus()
} 

function calcular() {
   let valorAbastecer = document.querySelector('input#valorAbastecer').value
   let precoCombustivel = document.querySelector('input#precoCombustivel').value
   let gasto = Number(valorAbastecer) / Number(precoCombustivel)
   let resultado = document.querySelector('div#res')

   if (valorAbastecer.length < 1 || precoCombustivel.length < 1) {
    return alert('Preencha todos os dados!')
   }

   resultado.innerHTML = `Você abastecerá ${gasto.toFixed(2)} litros!`
}

function limpar() {
   document.querySelector('input#valorAbastecer').value = ''
   document.querySelector('input#precoCombustivel').value = ''
   document.querySelector('div#res').innerHTML = 'Total de Litros'
   carregar()
}

