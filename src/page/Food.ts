class Food {
  element: HTMLElement
  parentHeight: number
  parentWidth: number

  constructor() {
    this.element = document.getElementById('food')!;
    const parent = document.getElementById('content')!;
    this.parentHeight = parent.clientHeight || 300;
    this.parentWidth = parent.clientWidth || 300;
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  change() {
    this.element.style.left = Math.round(Math.random() * this.parentWidth / 10) * 10 + 'px';
    this.element.style.top = Math.round(Math.random() * this.parentHeight / 10) * 10 + 'px';
  }
}

export default Food;