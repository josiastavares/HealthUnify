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


document.getElementById("formPaciente").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    cpf: document.getElementById("cpf").value,
    email: document.getElementById("email").value,
    senha: document.getElementById("senha").value
  };

  fetch('/pacientes', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      // Faça algo com a resposta, como redirecionar ou exibir uma mensagem de sucesso.
  })
  .catch((error) => {
      console.error('Error:', error);
      // Lide com erros aqui, como exibir uma mensagem de erro para o usuário.
  });
});
