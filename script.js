let dishCount = 0;
let soapCount = 5;
function render() {
  const numberOfDishes = document.getElementById("dishNumber");
  numberOfDishes.innerHTML = `Dirty Dishes: ${dishCount}`;
  const numberOfSoap = document.getElementById("dishSoap");
  numberOfSoap.innerHTML = `Dish Soup: ${soapCount}`;
}
function change() {
  const image = document.getElementById("image");
  image.src = "sinkFull.jpg";
}
setInterval(() => {
  dishCount += 1;
  render();
  change();
}, 2000);

let husbandCount = 0;
const buttonLazy = document.getElementById("lazy");
const doDishesButton = document.getElementById("doDishes");
const yellHusband = document.getElementById("yell");

yellHusband.addEventListener("click", () => {
  if (husbandCount < 3 && dishCount >= 3 && soapCount >= 4) {
    husbandCount++;
    console.log(husbandCount);
    dishCount = dishCount - 3;
    soapCount = soapCount - 4;
  }
  if (husbandCount >= 3) {
    yellHusband.disabled = true;
    yellHusband.style.backgroundColor = "grey";
    alert("Too much yelling! Give him a break!");
    setTimeout(() => {
      yellHusband.disabled = false;
      husbandCount = 0;
      yellHusband.style.backgroundColor = "rgb(246, 103, 87)";
    }, 8000);
  }
  render();
});

doDishesButton.addEventListener("click", () => {
  if (dishCount > 0 && soapCount > 0) {
    dishCount--;
    soapCount--;
  }
  render();
});
buttonLazy.addEventListener("click", () => {
  dishCount++;
  soapCount = soapCount + 3;
  render();
});
