let inputCpf = document.querySelector('#cpf');

inputCpf.addEventListener('keypress', (e) => {
    const allowedChars = /[0-9.-]/;
    const inputChar = String.fromCharCode(e.charCode);

    if (!allowedChars.test(inputChar)) {
        e.preventDefault();
    }

    let inputCpfLength = inputCpf.value.length;

    if (inputCpfLength === 3 || inputCpfLength === 7) {
        inputCpf.value += '.';
    }
    if (inputCpfLength === 11) {
        inputCpf.value += '-';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const formPaciente = document.getElementById('formPaciente');

    formPaciente.addEventListener('submit', function(event) {
        event.preventDefault();

        const cpf = document.getElementById('cpf').value;
        const senha = document.getElementById('senha').value;

        const data = {
            cpf: cpf,
            senha: senha
        };

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                localStorage.setItem('userId', data.id);
                localStorage.setItem('userName', data.nome); // Adicionando o nome do usuário ao localStorage
                window.location.href = './homePaciente.html';
            } else {
                console.error('Credenciais inválidas.');
            }
        })
        .catch(error => console.error('Erro:', error));
    });
});












