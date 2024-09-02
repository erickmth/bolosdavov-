document.addEventListener('DOMContentLoaded', () => {
    const applyButton = document.getElementById('apply-btn');
    const formPopup = document.getElementById('form-popup');
    const closeButton = document.getElementById('close-btn');
    const form = document.getElementById('application-form');

    applyButton.addEventListener('click', () => {
        formPopup.style.display = 'flex'; // Exibe o formulário
    });

    closeButton.addEventListener('click', () => {
        formPopup.style.display = 'none'; // Oculta o formulário
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const name = document.getElementById('name').value;
        const birthDate = document.getElementById('birthDate').value;
        const phone = document.getElementById('phone').value;

        if (name && birthDate && phone) {
            const emailBody = `Olá, me chamo ${name}, tenho ${calculateAge(birthDate)} anos e estou interessado na vaga Bolos da Vovó! Meu telefone de contato: ${phone}`;
            const mailtoLink = `mailto:atendimentobolosdav
