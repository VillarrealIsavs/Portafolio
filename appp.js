const reveals = document.querySelectorAll(".reveal");

function revealElements() {
    reveals.forEach((element) => {
        const top = element.getBoundingClientRect().top;
        const visible = window.innerHeight - 100;

        if (top < visible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);

revealElements();

const orderForm = document.querySelector("#formulario");
const formMessage = document.querySelector("#mensaje");

if (orderForm) {
    orderForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (formMessage) {
            formMessage.textContent = "Formulario listo. No se guardó ningún dato.";
        }

        orderForm.reset();
    });
}
