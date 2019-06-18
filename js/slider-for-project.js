let slider = {
  sectSlider: document.querySelector('.main-slider'),
  sliderArea: document.querySelector('#my-slider'),
  sliderWrap: document.querySelector('.slider-wrap'),
  leftBtn: document.querySelector('#left'),
  rightBtn: document.querySelector('#right'),
  sliderContent: document.querySelectorAll('.slider-content-item'),
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
    this.sectSlider.addEventListener('touchstart', function (e) {
      let touchobj = e.changedTouches[0] // первая точка прикосновения
      startx = parseInt(touchobj.clientX) // положение точки касания по x, относительно левого края браузера
    }, false)
    this.sectSlider.addEventListener('touchend', function (e) {
      let touchobj = e.changedTouches[0] // первая точка прикосновения для данного события
      let oYlength = touchobj.clientX - startx;
      if (oYlength < -50) thisHelper.sliderRight();
      else if (oYlength > 50) thisHelper.sliderLeft(thisHelper.index, sliderItems);
    }, false)

    // привязка контента
    this.sliderContent[0].style.opacity = '1'
  },
  // методы
  sliderRight: function () {
    let arr = this.sliderArea.children;
    if (this.index + 1 == arr.length) {
      this.index = 0;
      this.sliderGo();
      this.contentShow();
    } else {
      this.index++;
      this.sliderGo();
      this.index = this.index;
      this.contentShow();
    }
  },
  sliderLeft: function () {
    let arr = this.sliderArea.children;
    if (this.index == 0) {
      this.index = arr.length - 1;
      this.sliderGo();
      this.contentShow();
    } else {
      this.index--;
      this.sliderGo();
      this.contentShow();
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
  contentShow: function () {
    for (let i = 0; i < this.sliderContent.length; i++) {
      this.sliderContent[i].style.opacity = '0';
      this.sliderContent[this.index].style.opacity = '1';
    }
  }
}


