const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');

// 2- pegar os valores digitados no input
function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value; // valor em Dólar
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert') // valor em Real
    const currencyValueConverted = document.querySelector('.currency-value') // valor em Outras Moedas

    const realToday = 1.00
    const dolarToday = 5.69
    const euroToday = 6.19
    const libraToday = 7.43
    const bitcoinToday = 389.958

    // Mudar a moeda USD - colocar o simbolo US e deixar bonito com pontos
    //Se o select estiver selecionado o valor do dolar, entre aqui
    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    // Mudar a moeda EUR - colocar o simbolo E e deixar bonito com pontos
    //Se o select estiver selecionado o valor do euro, entre aqui
    if (currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday);
    }

    // Mudar a moeda BTC - colocar o simbolo E e deixar bonito com pontos
    //Se o select estiver selecionado o valor da bitcoin, entre aqui
    if (currencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday);
    }

    if (currencySelect.value == 'bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BTC',
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToday);
    }

    // Mudar a moeda BRL - colocar o simbolo R$ e deixar bonito com pontos
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue);
}

// Função pra quando clicar no botão mudar o nome embaixo da foto. pra dólar ou pra euro
function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar amaricano'
        currencyImage.src = './assets/usd.png'
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './assets/libra.png'
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'BitCoin'
        currencyImage.src = './assets/bitcoin.png'
    }

    convertValues()

}

currencySelect.addEventListener('change', changeCurrency)
// 1- tester o click do botão e ver se funcionou 
convertButton.addEventListener('click', convertValues);