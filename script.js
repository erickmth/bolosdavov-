document.addEventListener('DOMContentLoaded', function() {
    const applyBtn = document.getElementById('apply-btn');
    const closeBtn = document.getElementById('close-btn');
    const formPopup = document.getElementById('form-popup');
    const applicationForm = document.getElementById('application-form');

    // Exibe o formulário quando o botão "Candidatar-se" é clicado
    applyBtn.addEventListener('click', function() {
        formPopup.style.display = 'flex';
    });

    // Fecha o formulário quando o botão de fechar é clicado
    closeBtn.addEventListener('click', function() {
        formPopup.style.display = 'none';
    });

    // Manipula o evento de envio do formulário
    applicationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Captura os valores dos campos do formulário
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const phone = document.getElementById('phone').value;
        const curriculumFile = document.getElementById('curriculum').files[0];

        // Cria o corpo do e-mail com as informações do formulário
        let emailBody = `Nome: ${name}\nIdade: ${age}\nTelefone: ${phone}`;

        // Adiciona a mensagem se um currículo foi anexado
        if (curriculumFile) {
            emailBody += `\n\nAnexei o currículo no email: ${curriculumFile.name}`;
        }

        // Simulação de envio de e-mail (altere esta parte conforme necessário para enviar o e-mail de verdade)
        alert('Formulário enviado com sucesso!\n\n' + emailBody);

        // Fechar o formulário após o envio
        formPopup.style.display = 'none';

        // Limpa os campos do formulário após o envio
        applicationForm.reset();
    });
});
