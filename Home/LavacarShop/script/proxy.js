document.addEventListener("DOMContentLoaded", () => {
    const formAgendamento = document.getElementById("formAgendamento");
    const msgAgendamento = document.getElementById("msgAgendamento");

    formAgendamento.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuario = document.getElementById("usuarioAgendamento").value.trim();
        const nome = document.getElementById("nome").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const datahora = document.getElementById("datahora").value;

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
        const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

        // Verifica se os campos estão nulos
        if (!usuario || !nome || !telefone || !datahora) {
            msgAgendamento.innerText = "Preencha todos os campos.";
            return;
        }

        // Verifica se o usuario esta cadastrado
        if (!usuarios[usuario]) {
            msgAgendamento.innerText = "Usuário não encontrado. Faça o registro primeiro.";
            return;
        }

        // Salva o agendamento
        agendamentos.push({
            usuario,
            nome,
            telefone,
            datahora
        });

        localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

        msgAgendamento.innerText = "Agendamento realizado com sucesso!";
        formAgendamento.reset();
    });
});
