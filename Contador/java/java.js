const niver = new Date("2024, 4, 8");
let data = niver.toLocaleDateString('pt-BR', {dateStyle:'short'})
document.getElementById('piru').innerHTML = data
const sec = 1000;
const min = sec*60;
const hora = min*60;
const dia = hora*24;


let tempo = setInterval(() => contador(),sec);


function contador(){
    var hoje = new Date();
    let dif = niver.getTime() - hoje.getTime();

    document.getElementById('dia').innerHTML = Math.floor(dif / dia);
    document.getElementById('hora').innerHTML = Math.floor(dif % dia / hora);
    document.getElementById('minuto').innerHTML = Math.floor(dif% hora / min);
    document.getElementById('segundo').innerHTML = Math.floor(dif% min/sec);
}