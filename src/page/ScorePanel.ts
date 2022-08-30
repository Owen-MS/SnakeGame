class ScorePanel {

  score = 0;
  level = 1;
  private scoreElement: HTMLElement;
  private levelElement: HTMLElement;

  private readonly maxLevel: number;
  private readonly upScore: number

  constructor(maxLevel: number = 10, upScore: number = 2) {
    this.scoreElement = document.getElementById('score')!;
    this.levelElement = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  addScore() {
    this.scoreElement.innerText = ++this.score + '';
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  levelUp() {
    if (this.level > this.maxLevel) return;
    this.levelElement.innerText = ++this.level + '';
  }
}

export default ScorePanel;