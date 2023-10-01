document.getElementById('emailForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio do formulário padrão

  const formData = new FormData(this);

  fetch('/seuservidor', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Email enviado com sucesso!');
        this.reset(); // Limpa o formulário
      } else {
        alert('Ocorreu um erro ao enviar o email.');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
    });
});
