      function enviar(event) {
            event.preventDefault();
            const nome = document.getElementById("Nome").value;
            const mensagem = document.getElementById("Mensagem").value;
            const telefone = '5583981672361';
            const texto = `Olá, meu nome é ${nome} e gostaria de entrar em contato com você. ${mensagem}`;
            const msgFormatada = encodeURIComponent(texto);
            const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
            window.open(url, '_blank');
        }