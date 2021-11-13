import "../css/componentes.css";
import imglogo from "../assets/img/webpack-logo.png";

const hello = (person) => {
  const h2 = document.createElement("h2");
  h2.innerText = `Hola soy ${person}`;
  h2.classList.add('cambio')
  document.body.append(h2);

  const img = document.createElement('img')
  img.src = imglogo
  document.body.append(img)

};

const numbers = [];
let x = 0;
const crearNumeros = (num) => {
  while (x <= num) {
    numbers.push(x);
    x++;
  }
  const p = document.createElement("p");
  p.textContent = numbers;
  document.body.append(p);

};

export { hello };
export { crearNumeros };
