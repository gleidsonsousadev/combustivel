function carregar() {
document.querySelector('input#kmRodado').focus()
} 

function calcular() {
   let km = document.querySelector('input#kmRodado').value
   let litros = document.querySelector('input#litrosAbastecido').value
   let media = Number(km) / Number(litros)
   let resultado = document.querySelector('div#res')

   if (km.length < 1 || litros.length < 1) {
    return alert('Preencha todos os dados!')
   }

   resultado.innerHTML = `A média é de ${media.toFixed(2)} km/l!`
}

function limpar() {
   document.querySelector('input#kmRodado').value = ''
   document.querySelector('input#litrosAbastecido').value = ''
   document.querySelector('div#res').innerHTML = ''
   carregar()
}

