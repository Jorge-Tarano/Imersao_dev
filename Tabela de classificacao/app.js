const pontosPorVitoria = 3
const pontosPorEmpate  = 1
const pontosPorDerrota = 0

var corinthians = {
  nome: "Corinthians",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0  
}

var santos = {
  nome: "Santos",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0  
}

var saopaulo = {
  nome: "São Paulo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0  
}

var palmeiras = {
  nome: "Palmeiras",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0  
}

var times = [corinthians, santos, saopaulo, palmeiras]

// Funções específicas

function calcularPontos(time) {
  var pontos =  (time.vitorias * pontosPorVitoria) + 
                (time.empates * pontosPorEmpate) + 
                (time.derrotas * pontosPorDerrota)
  return pontos
}

function exibirTela(times) {
  var html = ""
  
  for (i = 0; i < times.length; i++) {   
    html += "<tr><td>" + times[i].nome + "</td>"
    html += "<td>" + times[i].vitorias + "</td>"
    html += "<td>" + times[i].empates + "</td>"
    html += "<td>" + times[i].derrotas + "</td>"
    html += "<td>" + times[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  } 
  var tabelaTimes = document.getElementById("tabelaTimes")
  tabelaTimes.innerHTML = html
}

function adicionarVitoria(i) {
  var time = times[i]
  time.vitorias++
  // Calcular a pontuação do time
  time.pontos = calcularPontos(time)
  exibirTela(times)
}

function adicionarEmpate(i) {
  var time = times[i]
  time.empates++
  // Calcular a pontuação do time
  time.pontos = calcularPontos(time)
  exibirTela(times)
}

function adicionarDerrota(i) {
  var time = times[i]
  time.derrotas++
  // Calcular a pontuação do time
  time.pontos = calcularPontos(time)
  exibirTela(times)
}

// Rotina principal

exibirTela(times)