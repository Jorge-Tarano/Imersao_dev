// Incluir filme na tela

function adicionarFilme() {
  var filmeFavorito = document.querySelector('#filme').value
  if (validarArquivo(filmeFavorito)) {
      listarFilmesNaTela(filmeFavorito)
  } else {
      alert("Imagem inválida")
  } 
  document.querySelector('#filme').value = ""
}

// Validar extensão do arquivo
function validarArquivo(filme) {
  if (filme.endsWith('.jpg')) {
     return true
  } else {
     return false
  }
}

// Incluir filme na tela, acumulando na mesma tela

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<a href='https://www.netflix.com/br/' target='_blank'> <img src=" + filme + "></a>"
  
 listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}