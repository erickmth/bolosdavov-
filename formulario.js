document.addEventListener('DOMContentLoaded', () => {
    const applyButton = document.getElementById('apply-btn');

    applyButton.addEventListener('click', () => {
        const name = prompt('Nome completo:');
        const birthDate = prompt('Data de Nascimento (dd/mm/aaaa):');
        const phone = prompt('Telefone para contato:');

        if (name && birthDate && phone) {
            const emailBody = `Olá, me chamo ${name}, tenho ${calculateAge(birthDate)} anos e estou interessado na vaga Bolos da Vovó! Meu telefone de contato: ${phone}`;
            const mailtoLink = `mailto:atendimentobolosdavovo@gmail.com?subject=Candidatura para a Vaga&body=${encodeURIComponent(emailBody)}`;

            window.open(mailtoLink, '_blank');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    function calculateAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate.split('/').reverse().join('-'));
        let age = today.getFullYear() - birth.getFullYear();
        const monthDifference = today.getMonth() - birth.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    }
});
