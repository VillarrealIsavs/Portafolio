const botonEntrar = document.querySelector(".enter-btn");
const portada = document.querySelector("#cover");

if (botonEntrar && portada) {
    botonEntrar.addEventListener("click", (evento) => {
        evento.preventDefault();

        portada.classList.add("hide");
        document.body.classList.remove("cover-active");

        setTimeout(() => {
            document.querySelector("#contenido")?.scrollIntoView({ behavior: "smooth" });
        }, 650);
    });
}
