class Body {
  constructor(x, y) {
    this.node = document.createElement('img');
    this.node.classList.add('body');
    this.node.setAttribute('src', 'assets/img/pokeball.png');

    this.node.style.left = x;
    this.node.style.top = y;

    gameboard.appendChild(this.node);
  }
}
