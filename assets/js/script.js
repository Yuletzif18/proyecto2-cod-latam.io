/* ===============================
   SCRIPT GLOBAL – PORTAFOLIO
================================ */

// MENU RESPONSIVE
function mostrarOcultarMenu() {
    let nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
}

function seleccionar() {
    let nav = document.getElementById("nav");
    nav.classList.remove("responsive");
}

// TOGGLE DE PERFIL
document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".btn-perfil");
    const profileContents = document.querySelectorAll("[data-profile]");
    const profileTexts = document.querySelectorAll(".profile-text");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedProfile = button.dataset.profile;

            // Activar botón
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Mostrar/Ocultar textos del banner
            profileTexts.forEach(text => {
                text.classList.toggle(
                    "hidden",
                    text.dataset.profile !== selectedProfile
                );
            });

            // Mostrar/Ocultar contenido
            profileContents.forEach(content => {
                content.classList.toggle(
                    "hidden",
                    content.dataset.profile !== selectedProfile
                );
            });
        });
    });
});
