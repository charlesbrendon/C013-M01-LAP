const prompt = require('prompt-sync')()

/* Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual: 
Salários até R$ 280,00 (incluindo): aumento de 20%. 
Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
Salários de R$ 1500,00 em diante: aumento de 5%.
Após o aumento ser realizado, informe na tela:
O salário antes do reajuste.
O percentual de aumento aplicado.
O valor do aumento.
O novo salário, após o aumento. */

console.log('REAJUSTE SALARIAL - SAIBA O NOVO VALOR DIGITANDO O VALOR ATUAL E SAIBA QUANTO SERÁ O AUMENTO:')

let salarioBase = +prompt('Digite seu salario atual: ')
let aumento
let salarioParcial
let salarioFinal

if (salarioBase <= 280){
  console.log('O aumento de salario é de 20%')
  salarioParcial = (salarioBase *0,20)
  salarioFinal = (salarioBase + salarioParcial)  
  aumento = "20%"
} else if (salarioBase >281, salarioBase <=700){
  console.log('O aumento de salario é de 15%')
  salarioParcial = (salarioBase *0,15)
  salarioFinal = (salarioBase + salarioParcial) 
  aumento = "15%"
} else if (salarioBase >701, salarioBase <=1500){
  salarioParcial = (salarioBase *0,10)
  salarioFinal = (salarioBase + salarioParcial) 
  aumento = "10%"
} else if (salarioBase >1500){
  console.log('O aumento de salario é de 5%')
  salarioParcial = (salarioBase *0,05)
  salarioFinal = (salarioBase + salarioParcial)  
  aumento = "5%"
}


console.log(`O seu salario R$${salarioBase} teve um reajuste de R$${aumento}, O valor atual é de R$${salarioFinal}` )