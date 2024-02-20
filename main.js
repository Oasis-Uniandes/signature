const finalName = document.getElementById("name");
const finalRol = document.getElementById("rol");
const finalEmail = document.getElementById("email");

const controls = [
  { control: finalName, text: "Nombre" },
  { control: finalRol, text: "Rol" },
  { control: finalEmail, text: "Correo electrónico" },
];

controls.forEach((item) => {
  item.control.contentEditable = true;

  item.control.addEventListener("click", (element) => {
    if (element.target.innerHTML.includes("[")) element.target.innerHTML = "";
    console.log(element);
  });

  item.control.addEventListener("focus", (element) => {
    if (element.target.innerHTML.includes("[")) element.target.innerHTML = "";
  });

  item.control.addEventListener("focusout", (element) => {
    if (element.target.innerHTML === "")
      element.target.innerHTML = `[Escribe tu ${item.text} aquí]`;
  });
});