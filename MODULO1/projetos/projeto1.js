const prompt = require('prompt-sync')()

console.log('*****responda com sim ou nao*****');
console.log();
console.log('O nosso héroi Kabofum andando pelos confins de trokayu, depois de uma grande tempestade que destruiu parte de seu mundo está agora lutando para sobreviver, Será que ele sairá vivo dessa jornada');
console.log();
let p1 = prompt('Kabofum encontrou agua?');
console.log();
let p2 = prompt('Kabofum encontrou alimentos?');
console.log();
let p3 = prompt('Kabofum encontrou encontrou abrigo?');
console.log();
let p4 = prompt('Kabofum encontrou roupas?');
console.log();
let p5 = prompt('Kabofum conseguiu fazer fogo?');
console.log();
let sim = 0;

if (p1 === 'sim'){
    sim++
};
if (p2 === 'sim'){
    sim++
};
if (p3 === 'sim'){
    sim++
};
if (p4 === 'sim'){
    sim++
};
if (p5 === 'sim'){
    sim++
}else 
console.log('Kabufum falhou miseravelmente');

if( sim === 1 && 2){
    console.log('Kabufum falhou, mas ainda consegue fugir da situação.')
};
if( sim === 3){
    console.log('Kabufum chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.')
};
if( sim === 4){
    console.log('Depois de muito esforço Kabufum conquista seu objetivo, embora não de maneira perfeita.')
};
if( sim === 5){
    console.log('Kabufum triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.')
};
console.log(typeof(sim));
console.log(sim);