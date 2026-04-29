let rotation = 0;
document.addEventListener("click", function () {
  let min = 1;
  let max = 50;
  rotation += Math.random() * (max - min + 5) + min;
  document.body.style.transform = `rotate(${rotation}deg)`;
});
