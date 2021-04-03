var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número de 0 a 10"))
  
  if (numeroSecreto == chute) {
    document.write("<h2>Parabéns! Você acertou</h2>")
    //break ou zerar a quantidade de tentativas
    tentativas = 0
  }
  else if (chute > numeroSecreto) {
    alert("O número secreto é menor")
    tentativas = tentativas - 1
  }
  else if (chute < numeroSecreto) {
    alert("O número secreto é maior")
    tentativas = tentativas - 1
  }
}
if (numeroSecreto != chute) {
  document.write("<h2>Suas tentativas acabaram. O número era: " + numeroSecreto + "</h2>")
}
