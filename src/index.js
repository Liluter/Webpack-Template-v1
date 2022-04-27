import { sum2 } from "./sum2"; // podpięcie import obiektów z innego pliku js
import style from "./css/index.scss"; //podpięcie stylu z pliku
import Icon from "./assets/img/proba.png"; // importowanie plików z src za pomocą type:resource import i przekazanie ich do folderu dist

let myIcon = new Image();
myIcon.src = Icon;
document.querySelector("div").appendChild(myIcon);
document.querySelector("div").classList.add("change");

const sum = require("./sum").sum;
console.log("Hello World");
console.log(sum(2, 3));
console.log(sum2(2, 3));

let heading = document.querySelector("#demo"),
    sumValue = sum(10, 5);

heading.innerHTML = `10 + 7 = ${sumValue}`;
