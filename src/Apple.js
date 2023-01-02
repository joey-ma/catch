class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'assets/img/pikachu.png');

    el.appendChild(this.node);

    // set up location of apple
    this.newPlacement();
  }

  newPlacement() {
    // since gameBoard is 700px x 700px && apple size is 50px x 50px
    // randomize the starting place of apple / pokeball
    const x = `${Math.floor(Math.random() * 14) * 50}px`; // needs the px
    const y = `${Math.floor(Math.random() * 14) * 50}px`;

    // console.log('here', head[0].style.left, head[0].style.left);
    // const { left, top } = head[0].style;
    // console.log('left & top:', left, top);
    // console.log('snakeBody', snakeBody);

    // iterate through snakeBody to make sure new placement of apple does not land on snake body
    for (const bodyPart of snakeBody) {
      // this.snakeBodyCoordinates.push([el.style.left, el.style.top]);
      if (x === bodyPart.node.style.left && y === bodyPart.node.style.top) {
        console.log('* avoided placing an apple on the snake body');
        return this.newPlacement();
      }
    }

    // console.log('iterated through', snakeBody.length, 'snake body part(s)');

    this.node.style.left = x;
    this.node.style.top = y;
    console.log(`new apple placement coordinates: [x, y] = [${x}, ${y}]`);
  }
}
