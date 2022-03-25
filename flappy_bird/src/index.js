import FlappyBird from './game';

const canvas = document.getElementById('bird-game');
let game = new FlappyBird(canvas);
canvas.addEventListener("mousedown",() => {game.click().bind(canvas);});
game.play();
// game.restart();