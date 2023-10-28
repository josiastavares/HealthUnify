

let inputCpf = document.querySelector('#cpf');

inputCpf.addEventListener('keypress', () => {

    let inputCpfLength = inputCpf.value.length;

    if (inputCpfLength === 3 || inputCpfLength === 7) {
        inputCpf.value += '.';
    }
    if (inputCpfLength === 11) {
        inputCpf.value += '-';
    }
});

document.querySelector('form').addEventListener('submit', function() {
    let nome = document.querySelector('#name').value;
    let cpf = document.querySelector('#cpf').value;
    let senha = document.querySelector('#senha').value
});