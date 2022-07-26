function carregar() {
document.querySelector('input#precoAlcool').focus()
} 

function calcular() {
   let precoAlcool = document.querySelector('input#precoAlcool').value
   let precoGasolina = document.querySelector('input#precoGasolina').value
   let calculoCombustivel = Number(precoAlcool) / Number(precoGasolina)
   let resultado = document.querySelector('div#res')
   let resAlcool = 'Abasteça com&nbsp;<b>Álcool</b>'
   let resGasolina = 'Abasteça com&nbsp;<b>Gasolina</>'

   if (precoAlcool.length < 1 || precoGasolina.length < 1) {
    return alert('Preencha todos os dados!')
   }

   if (calculoCombustivel < 0.7) {
      return resultado.innerHTML = resAlcool
   } else 
      return resultado.innerHTML = resGasolina
}

function limpar() {
   document.querySelector('input#precoAlcool').value = ''
   document.querySelector('input#precoGasolina').value = ''
   document.querySelector('div#res').innerHTML = 'Total de Litros'
   carregar()
}

