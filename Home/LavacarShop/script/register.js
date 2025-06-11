document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRegistro");
    const mensagem = document.getElementById("mensagem");
    const registroContainer = document.getElementById("registroContainer");
    const sucessoContainer = document.getElementById("sucessoContainer");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const senha = document.getElementById("senha").value;

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

        if (!usuario || !senha) {
            mensagem.innerText = "Preencha todos os campos.";
            return;
        }

        if (usuarios[usuario]) {
            mensagem.innerText = "Usuário já cadastrado.";
            return;
        }

        usuarios[usuario] = { senha };
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // Mostrar container de sucesso
        registroContainer.classList.add("hidden");
        sucessoContainer.classList.remove("hidden");
    });
});
