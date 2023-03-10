function splitSquare(square) {
  square.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.addEventListener('click', function () {
      splitSquare(this);
    });
    square.appendChild(div);
  }
}
