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
    //6
    elemento.src = getRandom(gifs);
    // Lo guardamos como "original" para que el apartado 3 no lo deshaga al salir
    elemento.dataset.srcOriginal = elemento.src;
  }

  //2.2
  else if (elemento.tagName === "P") {
    elemento.style.color = getRandom(paleta);
    elemento.style.backgroundColor = getRandom(paleta);
    elemento.dataset.colorOriginal = elemento.style.color;
    elemento.dataset.fondoOriginal = elemento.style.backgroundColor;
  }

  //2.3
  else if (elemento.tagName === "ARTICLE" || elemento.tagName === "SECTION") {
    elemento.style.backgroundColor = getRandom(paleta);
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
    elemento.style.color = getRandom(paleta);
    elemento.style.backgroundColor = getRandom(paleta);
  }

  //3.3
  else if (elemento.tagName === "ARTICLE" || elemento.tagName === "SECTION") {
    elemento.dataset.fondoOriginal = elemento.style.backgroundColor;
    elemento.style.backgroundColor = getRandom(paleta);
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

//4
const getRandom = (array) => {
  const indice = Math.floor(Math.random() * array.length);
  return array[indice];
};

//5

const paleta = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];

//6
const gifs = [
  "assets/magic-1.gif",
  "assets/magic-2.gif",
  "assets/magic-3.gif",
  "assets/magic-4.gif",
  "assets/magic-5.gif",
  "assets/magic-6.gif"
];

const colors = ["red", "blue", "green"];
console.log(getRandom(colors));
