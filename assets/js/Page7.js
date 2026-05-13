let rotation = 0;
document.addEventListener("click", function () {
  let min = 1;
  let max = 20;
  rotation += Math.random() * (max - min + 1) + min;
  document.body.style.transform = `rotate(${rotation}deg)`;
});

document.getElementById("myText").textContent = "This is Safe Text.";
