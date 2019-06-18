const searchForm = document.querySelector('#search-form'),
      movie = document.querySelector('#content');

function apiSearch(e) {
  e.preventDefault();
  const formInput = document.querySelector('#search-form input').value;
  const server = 'https://api.themoviedb.org/3/search/multi?api_key=712dddf9c2e456d59357238a18de737a&language=ru&query=' + formInput;
  requestApi(server);
}

searchForm.addEventListener('submit', apiSearch);

function requestApi(url){
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;
    if (request.status !== 200) return;

    const output = JSON.parse(request.responseText);
    let movieDate = '';
    

    let inner = '';
    output.results.forEach(function (item) {
      if (item.release_date !== undefined) {
        movieDate = `(${item.release_date})`;
      }


      let nameItem = item.name || item.title;
      inner += `<div class="col-md-6 col-xs-12 output-item"><h1 class="output__title">${nameItem} <span> ${movieDate}</span></h1>`;
      inner += `<img class="output__img" src="https://image.tmdb.org/t/p/w400/${item.poster_path}"></div>`
    })
    movie.innerHTML = inner
  })
}