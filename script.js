const p = document.querySelector('p');
const colors = ['red', 'green', 'blue']; // Define an array of colors
let colorIndex = 0; // Initialize a counter for the current color index

// Add event listener to the button
document.getElementById('colorButton').addEventListener('click', changeColor);

function changeColor() {
    p.style.color = colors[colorIndex]; // Set the color of the paragraph to the current color
    colorIndex = (colorIndex + 1) % colors.length; // Increment the color index and wrap around if necessary
   
     

}