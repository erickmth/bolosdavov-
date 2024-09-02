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
            const age = calculateAge(birthDate);
            const emailBody = `Olá, me chamo ${name}, tenho ${age} anos e estou interessado na vaga Bolos da Vovó! Meu telefone de contato: ${phone}`;
            const mailtoLink = `mailto:atendimentobolosdavovo@gmail.com?subject=Candidatura para Vaga&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoLink;

            // Fecha o formulário após o envio
            formPopup.style.display = 'none';
        }
    });

    function calculateAge(birthDate) {
        const [day, month, year] = birthDate.split('/').map(Number);
        const dob = new Date(year, month - 1, day);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    }
});
