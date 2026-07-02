const buscador = document.getElementById("buscador");
const articulos = document.querySelectorAll(".sabiasQue");

buscador.addEventListener("input", () => {
    const textoBuscado = buscador.value.trim().toLowerCase();

    articulos.forEach((articulo) => {
        const contenido = articulo.textContent.toLowerCase();

        if (contenido.includes(textoBuscado)) {
            articulo.style.display = "block";
        } else {
            articulo.style.display = "none";
        }
    });
});
