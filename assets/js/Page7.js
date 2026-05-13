const img = document.getElementById('Puppy', 'Milk', 'Poster', 'Underpants');
let rotation = 0;
setInterval(function () {
  rotation += 5;
  document.body.style.transform = `rotate(${rotation}deg)`;
}, 100);
