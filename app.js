let backgroundColors = ['red', 'green', 'blue', 'yellow', 'orange', 'cyan', 'purple'];

function changeBackground() {
  let color = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  document.getElementById('background').style.backgroundColor = color;
}
