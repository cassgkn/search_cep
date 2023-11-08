/*
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        // AJAX - Asynchronous JavaScript and XML - carrega ou faz uma solicitação sem a necessidade de recarregar uma página.

        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoit = `https://viacep.com.br/ws/${cep}/json`;

        xhttp.open('GET', endpoit);
        xhttp.send();

    })
})*/

$(document).ready(function() {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoit = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        $.ajax(endpoit).done(function(resposta) {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro}, ${cidade} - ${estado}`;
            $('#endereco').val(endereco);

            setTimeout(function() {
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 2000);
        })
    })
})

//icons.getbootstrap.com/#install