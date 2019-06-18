let Tabs = {
  tabsSection: document.getElementById('about-wrap'),
  index: 0,
  init: function () {
    let thisHelper = this;
    let tabIndex = thisHelper.index;

    let tabArea = this.tabsSection.querySelector('.s-about-content');
    let tabItem = this.tabsSection.querySelectorAll('.s-about-item');
    // кнопки
    let tabsButtons = this.tabsSection.querySelectorAll('.s-about-tabs__item');
    // стрелки
    let btnPrev = this.tabsSection.querySelector('.s-about-arrows__btn-prev');
    let btnNext = this.tabsSection.querySelector('.s-about-arrows__btn-next');
    // позиционирование
    this.getPosition(tabItem, tabArea);
	window.addEventListener(`resize`, e => {

    this.getPosition(tabItem, tabArea);
    
		if (window.innerWidth >= 1200) {
			tabArea.style.transform = thisHelper.moveSlider(tabArea, 0, tabItem);
			this.removeActiveButton(tabsButtons);
			tabsButtons[0].classList.add('is-active');
			
		} else if (window.innerWidth >= 992) {
			this.moveSlider(tabArea, 0, tabItem);
			this.removeActiveButton(tabsButtons);
			tabsButtons[0].classList.add('is-active');
			
		} else if (window.innerWidth >= 768) {
			this.moveSlider(tabArea, 0, tabItem);
			this.removeActiveButton(tabsButtons);
			tabsButtons[0].classList.add('is-active');
			
		} else if (window.innerWidth >= 576) {
			this.moveSlider(tabArea, 0, tabItem);
			this.removeActiveButton(tabsButtons);
			tabsButtons[0].classList.add('is-active');
			
		}
	}, false);



    // логика
    let moveTabs = function () {
      thisHelper.moveSlider(tabArea, tabIndex, tabItem);
    }

    this.tabsSection.addEventListener('click', function (e) {
      tabsButtons.forEach(function (btn, i, btnArr) {
			// логика кнопок
			if (e.target == btn) {
				thisHelper.removeActiveButton(btnArr);
				btn.classList.add('is-active');
			};
			if (btn.classList.contains('is-active')) {
				tabIndex = i;
			};
			if (e.target == btn) {
				moveTabs ()
			};
    });

    // логика правой кнопки
    if (e.target == btnNext) {

			if (tabIndex < 2) {
				thisHelper.removeActiveButton(tabsButtons);
				tabsButtons[tabIndex].nextElementSibling.classList.add('is-active');
				tabsButtons.forEach(function (btn, i, btnArr) {
					if (btn.classList.contains('is-active')) {
						tabIndex = i;
					}
				})
				moveTabs()
			} else {
				thisHelper.removeActiveButton(tabsButtons);
				tabsButtons[0].classList.add('is-active');
				thisHelper.moveSlider(tabArea, 0, tabItem);
			}
    }
      // логика левой кнопки
    if (e.target == btnPrev) {

			if (tabIndex > 0) {
				thisHelper.removeActiveButton(tabsButtons);
				tabsButtons[tabIndex].previousElementSibling.classList.add('is-active');
				tabsButtons.forEach(function (btn, i, btnArr) {
					if (btn.classList.contains('is-active')) {
						tabIndex = i;
					}
				});
				moveTabs()
			} else {
				thisHelper.removeActiveButton(tabsButtons);
				tabsButtons[2].classList.add('is-active');
				thisHelper.moveSlider(tabArea, 2, tabItem);
			}
		}
  })



  },


  // методы
  getPosition: function (contentItems, content) {
    contentItems.forEach(function (item, i) {
      if (i>0) {
        item.style.transform = `translateX(${i*item.offsetWidth}px)`;
      }
      content.style.height = `${contentItems[0].offsetHeight + 30}px`
    });
  },

  moveSlider: function (content, index, tabItem) {
    content.style.transform = `translateX(-${index*tabItem[index].offsetWidth}px)`;
		content.style.height = `${tabItem[index].offsetHeight + 30}px`;
  },

  removeActiveButton: function (arrButtons) {
		arrButtons.forEach(item => {
			item.classList.remove('is-active');
    })
  }

}