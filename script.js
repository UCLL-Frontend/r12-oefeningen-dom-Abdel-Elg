const button = document.getElementById("changeTitle");
const title = document.getElementById("title");

button.addEventListener("click", () => {
  title.textContent = "Javascript is geweldig !";
});

const button1 = document.getElementById("addText");
const updateText = document.getElementById("paragraph");

button1.addEventListener("click", () => {
  updateText.textContent += " Hier is extra tekst !";
});

const button2 = document.getElementById("changeColor");
const colorBox = document.getElementById("colorBox");

button2.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777225).toString(16);
  colorBox.style.backgroundColor = randomColor;
});

const button3 = document.getElementById("hideText");
const text = document.getElementById("text");

button3.addEventListener("click", () => {
  text.style.display = "none";
});
