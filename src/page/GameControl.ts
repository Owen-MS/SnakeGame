import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel'


const MUTEX_DIRECTION: {
  [key: string]: string
} = {
  'ArrowUp': 'ArrowDown',
  'ArrowDown': 'ArrowUp',
  'ArrowLeft': 'ArrowRight',
  'ArrowRight': 'ArrowLeft'
}

class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  direction: string = 'right'
  isLive: boolean = true

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }


  init() {
    document.addEventListener('keydown', this.keydownHandle.bind(this));
    this.move();
  }

  // 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight'

  keydownHandle(e: KeyboardEvent) {
    // TODO 如果来做反方向互斥，要思考单个吃蛇场景
    // if (e.key === MUTEX_DIRECTION[this.direction]) return;
    this.direction = e.key;
  }

  move() {
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direction) {
      case 'ArrowUp':
        Y -= 10;
        break;
      case 'ArrowDown':
        Y += 10;
        break;
      case 'ArrowLeft':
        X -= 10;
        break;
      case 'ArrowRight':
        X += 10;
        break;
    }
    this.checkEat(X, Y);
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      this.isLive = false;
      // @ts-ignore
      alert(e.message);
    }

    this.isLive && setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.snake.addBody();
      this.food.change();
      this.scorePanel.addScore();
    }
  }
}

export default GameControl;