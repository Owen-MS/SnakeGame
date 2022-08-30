class Snake {
  private head: HTMLElement
  private readonly bodies: HTMLCollectionOf<HTMLElement>
  private element: HTMLElement


  constructor() {
    this.head = document.getElementsByClassName('snake-item')[0]! as HTMLElement;
    this.element = document.getElementById('snake')!;
    this.bodies = document.getElementsByClassName('snake-item') as HTMLCollectionOf<HTMLElement>;
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value) {
    if (this.X === value) {
      return;
    }
    if (value < 0 || value >= 300) {
      throw new Error('蛇撞墙了');
    }
    // 是否可以反方向掉头
    if (this.bodies[1] && this.bodies[1].offsetLeft === value) {
      if (value > this.X) {
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }
    this.moveBody();
    this.head.style.left = value + 'px';
    this.checkHeadBody();
  }

  set Y(value) {
    if (this.Y === value) return;
    if (value < 0 || value >= 300) {
      throw new Error('蛇撞墙了');
    }
    // 是否可以反方向掉头 单个允许
    if (this.bodies[1] && this.bodies[1].offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }
    this.moveBody();
    this.head.style.top = value + 'px';
    this.checkHeadBody();
  }


  addBody() {
    const dom = document.createElement('div');
    dom.classList.add('snake-item');
    this.element.appendChild(dom);
    // this.element.insertAdjacentElement('beforeend',dom);
  }

  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = this.bodies[i - 1].offsetLeft;
      let Y = this.bodies[i - 1].offsetTop;
      const element = this.bodies[i];
      element.style.left = X + 'px';
      element.style.top = Y + 'px';
    }
  }

  checkHeadBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      const element = this.bodies[i];
      if (this.X === element.offsetLeft && this.Y === element.offsetTop) {
        throw new Error('撞到了自己');
      }
    }
  }
}

export default Snake;