const hoje = new Date();
const diaDaSemana = hoje.getDay();
let dia = (diaDaSemana === 6 || diaDaSemana === 0) ? 1 : 0;

if (dia) {
    console.log('fim de semana');
    document.querySelector('#precoagua').innerHTML = '7,00';
    document.querySelector('#sucos').innerHTML = '<h3>Suco R$ <span class="preco">15,00</span></h3><p>Abacate, Abacaxi, Abacaxi com Hortelã, Acerola, Amora, Açaí, Caju, Cajá, Frutas Mix, Goiaba, Graviola, Jaca, Kiwi, Laranja, Limonada Suiça, Limão, Manga, Maracujá, Melancia, Melão, Morango, Romã, Uva</p>';
    document.querySelector('#precorefri').innerHTML = '11,00';
    document.querySelector('#precorefri1').innerHTML = '11,00';
    document.querySelector('#precorefri2').innerHTML = '11,00';
    document.querySelector('#precorefri3').innerHTML = '11,00';
} else {
    console.log('dia de semana');
    document.querySelector('#precoagua').innerHTML = '5,00';
    document.querySelector('#sucos').innerHTML = '<h3>Suco Simples R$ <span class="preco">15,00</span></h3><p>Abacate, Abacaxi, Acerola, Amora, Açaí, Caju, Cajá, Goiaba, Graviola, Jaca, Kiwi, Laranja, Limão, Manga, Maracujá, Melancia, Melão, Morango, Romã, Uva</p><h3>Suco Mix R$<span class="preco">16,00</span></h3><p>Abacaxi c/ Hortelã, Frutas Mix, Laranja c/ Acerola, Laranja c/ Morango</p>';
    document.querySelector('#precorefri').innerHTML = '9,00';
    document.querySelector('#precorefri1').innerHTML = '9,00';
    document.querySelector('#precorefri2').innerHTML = '9,00';
    document.querySelector('#precorefri3').innerHTML = '9,00';
}
