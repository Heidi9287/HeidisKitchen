let dishCount = 0;
let soapCount = 5;
function render() {
  const numberOfDishes = document.getElementById("dishNumber");
  numberOfDishes.innerHTML = `Number of Dirty Dishes: ${dishCount}`;
  const numberOfSoap = document.getElementById("dishSoap");
  numberOfSoap.innerHTML = `Number of Dish Soup: ${soapCount}`;
}
setInterval(() => {
  dishCount += 1;
  render();
}, 2000);

const buttonAdd = document.getElementsByClassName("add");
const minusButton = document.getElementsByClassName("minus");
for (let i = 0; i < minusButton.length; i++) {
  minusButton[i].addEventListener("click", () => {
    if (dishCount > 0 && soapCount > 0) {
      dishCount--;
      soapCount--;
    }
    render();
  });
}
buttonAdd[0].addEventListener("click", () => {
  dishCount++;
  soapCount = soapCount + 5;
  render();
});
