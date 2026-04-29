// main.js

console.log("Hello, World!");


// 1. Select the specific image by its ID
const img = document.getElementById('myTargetImage');

// 2. Add a click event listener
img.addEventListener('click', function() {
    // 3. Define what happens when clicked
    alert('The Last Sentence Will Get You Out of This Fiery Mess!');
    console.log('You clicked the specific image.');
});

