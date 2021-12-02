function Calcular() {
  let receita1 = parseFloat(document.getElementById("receita1").value)
  let receita2 = parseFloat(document.getElementById("receita2").value)
  let receita3 = parseFloat(document.getElementById("receita3").value)
  let aplicacao1 = parseFloat(document.getElementById("aplicacao1").value)
  let aplicacao2 = parseFloat(document.getElementById("aplicacao2").value)
  let aplicacao3 = parseFloat(document.getElementById("aplicacao3").value)
  let irrf = parseFloat(document.getElementById("irrf").value)
  let irAplicacao1 = parseFloat(document.getElementById("irAplicacao1").value)
  let irAplicacao2 = parseFloat(document.getElementById("irAplicacao2").value)
  let irAplicacao3 = parseFloat(document.getElementById("irAplicacao3").value)
  let resultado = document.getElementById("resultado")
  let select = parseFloat(document.getElementById("aliquota").value)
  let adcionalIr = 0
  
  let totalReceitas = receita1 + receita2 + receita3
  let totalReceitasFinal = parseFloat(totalReceitas.toFixed(2))
  let totalRendido = (totalReceitasFinal * select)
  let totalRendidoFinal = parseFloat(totalRendido.toFixed(2))

  if (totalRendidoFinal > 60000) { adcionalIr = 60000 }
  
  let totalRendidoBancos = totalRendidoFinal + aplicacao1 + aplicacao2 + aplicacao3
  let deducao = (totalRendidoBancos * 0.15)
  let deducaoFinal = parseFloat(deducao.toFixed(2))

  let totalDeducoes = irrf + irAplicacao1 + irAplicacao2 + irAplicacao3
  let totalDeducoesFinal = parseFloat(totalDeducoes.toFixed(2))

  let deducaoFinal2 = deducaoFinal - totalDeducoesFinal
  let deducaoFinal3 = parseFloat(deducaoFinal2.toFixed(2))

  if (totalRendidoFinal >= 60000) {
  let contaAdicional = (totalRendidoBancos - adcionalIr) * 0.10
  let contaAdicionalFinal = parseFloat(contaAdicional.toFixed(2))
  let quaseResultado = contaAdicionalFinal + deducaoFinal3
  let resultadoFinal = parseFloat(quaseResultado.toFixed(2)) 
  let imprimirResultado = `O valor a ser pago é de R$${resultadoFinal.toFixed(2)}`
  resultado.innerHTML = imprimirResultado
  } else
  {
  let imprimirResultado = `O valor a ser pago é de R$${deducaoFinal3.toFixed(2)}`
  resultado.innerHTML = imprimirResultado
  }
}