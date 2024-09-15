const box = document.querySelectorAll(".color");
const buttonGenerate = document.querySelector(".button");

const setBg = () => {
  box.forEach((item) => {
    const randomColor = (
      "0" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .toUpperCase()
    ).slice(-6);
    item.style.backgroundColor = `#${randomColor}`;
    item.children[0].style.backgroundColor = `#${randomColor}`;
    item.children[0].innerHTML = randomColor;
    item.children[0].style.opacity = 1;
  });
};
const copyHandler = (event) => {
  navigator.clipboard.writeText(`#${event.target.innerHTML}`);
  event.target.style.opacity = 0.2;
};

window.addEventListener("load", () => {
  buttonGenerate.addEventListener("click", setBg);
  box.forEach((item) => item.addEventListener("click", copyHandler));
});
