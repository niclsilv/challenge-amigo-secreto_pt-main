//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
  const textoInput = document.querySelector('input#amigo')
  if (!textoInput.value) {
    alert('Por favor, insira um nome.')
    return
  }

  amigos.push(textoInput.value)
  let item = document.createElement('li')
  item.classList.add('name-list-item')

  let paragrafo = document.createElement('p')
  paragrafo.innerHTML = textoInput.value
  item.appendChild(paragrafo)

  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.appendChild(item);
  textoInput.value = ''
}

function sortearAmigo() {
  if (!amigos.length) {
    alert('Nenhuma amigo adicionado.')
    return
  }

  let itensAmigos = document.querySelectorAll('li.name-list-item')
  for (let itemAmigo of itensAmigos) {
    itemAmigo.remove()
  }
  let resultado = document.createElement('p')
  resultado.innerHTML = `O amigo sorteado secreto é: ${amigos[Math.floor(Math.random() * amigos.length)]}`
  document.getElementById('resultado').replaceChildren(resultado)
  amigos = []
}
