document.addEventListener('DOMContentLoaded', function() {
    const applyBtn = document.getElementById('apply-btn');
    const closeBtn = document.getElementById('close-btn');
    const formPopup = document.getElementById('form-popup');
    const applicationForm = document.getElementById('application-form');

    applyBtn.addEventListener('click', function() {
        formPopup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        formPopup.style.display = 'none';
    });

    applicationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const phone = document.getElementById('phone').value;
        const curriculumFile = document.getElementById('curriculum').files[0];

        let emailBody = `Nome: ${name}\nIdade: ${age}\nTelefone: ${phone}`;

        if (curriculumFile) {
            emailBody += `\n\nAnexei o currículo no email: ${curriculumFile.name}`;
        }

        // Simulação de envio de e-mail (substitua com a lógica de envio de e-mail real)
        alert('Formulário enviado!\n\n' + emailBody);

        // Fechar o formulário após o envio
        formPopup.style.display = 'none';
    });
});
