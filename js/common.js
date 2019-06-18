
sidebar.init()




let animTitle = function () {
  let animTitle = document.querySelector('#anim-title');
  let worldArr = animTitle.innerHTML.split('');
  let newTitle = document.createElement('div');

  worldArr.forEach(world => {
    let titleWorld = document.createElement('span');

    titleWorld.style.animationDelay = `${Math.ceil(Math.random() * 1200) + 50}ms`;
    titleWorld.innerHTML = `${world}`;
    newTitle.appendChild(titleWorld);
  });
  animTitle.innerHTML = newTitle.innerHTML
}
animTitle()

let headerFixed = function () {
  let header = document.querySelector('#header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 600) {
      header.classList.remove('out')
      header.classList.add('fade')
      header.style.opacity = '1'
    }
    else if (window.scrollY < 600 && window.scrollY > 400) {
      header.style.opacity = '0'
    }
    else {
      header.style.opacity = '1'
      header.classList.remove('fade')
    }
  })
}

headerFixed()