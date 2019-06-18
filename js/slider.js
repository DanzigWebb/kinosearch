let slider = {
  sliderArea: document.querySelector('#my-slider'),
  sliderWrap: document.querySelector('.slider-wrap'),
  leftBtn: document.querySelector('#left'),
  rightBtn: document.querySelector('#right'),
  index: 0,
  init: function () {
    let thisHelper = this;
    for (let i = 0; i < this.sliderArea.children.length; i++) {
      this.sliderArea.children[i].classList.add('slider-item');
      this.sliderArea.children[0].classList.add('active');
    };
    let sliderItems = document.querySelectorAll('.slider-item');

    sliderItems.forEach(function (item, i, arr) {
      thisHelper.sliderArea.style.width = thisHelper.sliderWrap.offsetWidth * arr.length + 'px';
      item.style.width = thisHelper.sliderWrap.offsetWidth + 'px';
      step = item.style.width;
    });
    // события
    this.rightBtn.addEventListener('click', () => {
      this.sliderRight();
      console.log(this.index)
    })
    this.leftBtn.addEventListener('click', () => {
      this.sliderLeft(this.index, sliderItems);
      console.log(this.index)
    })
    // тач события
    let startx = 0;
    this.sliderWrap.addEventListener('touchstart', function (e) {
      let touchobj = e.changedTouches[0] // первая точка прикосновения
      startx = parseInt(touchobj.clientX) // положение точки касания по x, относительно левого края браузера
    }, false)
    this.sliderWrap.addEventListener('touchend', function (e) {
      let touchobj = e.changedTouches[0] // первая точка прикосновения для данного события
      let oYlength = touchobj.clientX - startx;
      if (oYlength < -50) thisHelper.sliderRight();
      else if (oYlength > 50) thisHelper.sliderLeft(thisHelper.index, sliderItems);
    }, false)
  },
  // методы
  sliderRight: function () {
    let arr = this.sliderArea.children;
    if (this.index + 1 == arr.length) {
      this.index = 0;
      this.sliderGo();
    } else {
      this.index++;
      this.sliderGo();
      this.index = this.index;
    }
  },
  sliderLeft: function () {
    let arr = this.sliderArea.children;
    if (this.index == 0) {
      this.index = arr.length - 1;
      this.sliderGo();
    } else {
      this.index--;
      this.sliderGo();
    }
  },
  sliderGo: function () {
    let arr = this.sliderArea.children;
    this.sliderArea.style.transform = `translateX(-${this.index * arr[this.index].offsetWidth}px)`;
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove('active');
      arr[this.index].classList.add('active')
    }
  },

}