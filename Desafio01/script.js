document.addEventListener('DOMContentLoaded', function() {
    const cepInput = document.getElementById('cep');
    cepInput.addEventListener('blur', handleCepBlur);
});

function handleCepBlur(event) {
    const cep = event.target.value.replace(/\D/g, '');

    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('rua').value = data.logradouro;
                    document.getElementById('complemento').value = data.complemento;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('cidade').value = data.localidade;
                    document.getElementById('estado').value = data.uf;
                } else {
                    resetAddressFields();
                    alert('CEP nao encontrado.');
                }
            })
            .catch(error => {
                resetAddressFields();
                console.error(error);
                alert('Ocorreu um erro ao consultar o CEP. Por favor, tente novamente.');
            });
    } else {
        resetAddressFields();
    }
}

function resetAddressFields() {
    document.getElementById('rua').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}