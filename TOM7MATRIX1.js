const characters = ' -0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!';
const targetText = "TOM7Xploit Was Here!!";
const container = document.getElementById("MATRIX");
function animateChar(targetChar, index) {
  const span = document.createElement("span");
  span.className = "char";
  container.appendChild(span);
  let currentIndex = 0;
  const targetIndex = characters.indexOf(targetChar);
  const interval = setInterval(() => {
    span.textContent = characters[currentIndex];
    if (characters[currentIndex] === targetChar) {
      clearInterval(interval);
    } else {
      currentIndex = (currentIndex + 1) % characters.length;
      }
  }, 210);
}
    [...targetText].forEach((char, i) => {
      setTimeout(() => animateChar(char, i), i * 150);
    });
