var primeiroValor = parseInt(prompt("Primeiro valor?"))
var segundoValor = parseInt(prompt("Segundo valor?"))
var operacao = prompt("Qual operação (+, -, /, *)?")

if (operacao == "+") {
    var resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " " + operacao + " " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == "-") {
    var resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " " + operacao + " " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == "/") {
    if (segundoValor == 0) {
        document.write("<h2>Não se / por 0</h2>")
    } else {
        var resultado = primeiroValor / segundoValor
        document.write("<h2>" + primeiroValor + " " + operacao + " " + segundoValor + " = " + resultado + "</h2>")
    }
} else if (operacao == "*") {
    var resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " " + operacao + " " + segundoValor + " = " + resultado + "</h2>")
} else {
    document.write("<h2>Opção inválida</h2>")
}
