//1
document.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Has HECHO CLICK");
});
//2
document.addEventListener("click", function(event) {
  const elemento = event.target;

  //2.1
  if (elemento.tagName === "IMG") {
    const numero = Math.floor(Math.random() * 6) + 1;
    elemento.src = "assets/magic-" + numero + ".gif";
    // Lo guardamos como "original" para que el apartado 3 no lo deshaga al salir
    elemento.dataset.srcOriginal = elemento.src;
  }

  //2.2
  else if (elemento.tagName === "P") {
    elemento.style.color = colorAleatorio();
    elemento.style.backgroundColor = colorAleatorio();
    elemento.dataset.colorOriginal = elemento.style.color;
    elemento.dataset.fondoOriginal = elemento.style.backgroundColor;
  }

  //2.3
  else if (elemento.tagName === "ARTICLE" || elemento.tagName === "SECTION") {
    elemento.style.backgroundColor = colorAleatorio();
    elemento.dataset.fondoOriginal = elemento.style.backgroundColor;
  }
});

//3
document.addEventListener("mouseenter", function(event) {
  const elemento = event.target;

  //3.1
  if (elemento.tagName === "IMG") {
    elemento.dataset.srcOriginal = elemento.src;
    elemento.src = "assets/abracadabra.gif";
  }

  //3.2
  else if (elemento.tagName === "P") {
    elemento.dataset.colorOriginal = elemento.style.color;
    elemento.dataset.fondoOriginal = elemento.style.backgroundColor;
    elemento.style.color = colorAleatorio();
    elemento.style.backgroundColor = colorAleatorio();
  }

  //3.3
  else if (elemento.tagName === "ARTICLE" || elemento.tagName === "SECTION") {
    elemento.dataset.fondoOriginal = elemento.style.backgroundColor;
    elemento.style.backgroundColor = colorAleatorio();
  }
}, true);

document.addEventListener("mouseleave", function(event) {
  const elemento = event.target;

  if (elemento.tagName === "IMG") {
    elemento.src = elemento.dataset.srcOriginal;
  }

  else if (elemento.tagName === "P") {
    elemento.style.color = elemento.dataset.colorOriginal;
    elemento.style.backgroundColor = elemento.dataset.fondoOriginal;
  }

  else if (elemento.tagName === "ARTICLE" || elemento.tagName === "SECTION") {
    elemento.style.backgroundColor = elemento.dataset.fondoOriginal;
  }
}, true);

function colorAleatorio() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

