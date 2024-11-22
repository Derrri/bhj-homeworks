const image = document.getElementById("cookie");
const count = document.getElementById("clicker__counter");

const originalWidth = image.width;
const newWidth = 230;
let currentWidth = originalWidth;

function changeSizes() {
  currentWidth = currentWidth === originalWidth ? newWidth : originalWidth;
  image.width = currentWidth;

  count.textContent = Number(count.textContent) + 1;
}

image.onclick = changeSizes;
