/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

//document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          form = document.querySelector('form.add'),
          input = form.querySelector('.adding__input'),
          checkbox = form.querySelector('[type="checkbox"]');
    
    
    function preparePage() {
        adv.forEach(item => {
            item.remove();
        });

        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let str = input.value;
            if (str) {
                if (str.length > 21) {
                    str = `${str.slice(0, 21)}...`;
                }
                if (checkbox.checked) {
                    console.log('Добавляем любимый фильм');
                }
                movieDB.movies.push(str);
                updateMovieList();
                form.reset();
            }
        });
    }

   
    function updateMovieList() {
        movieList.innerHTML = "";

        movieDB.movies.sort();

        movieDB.movies.forEach((film, i) => {
            movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
        });

        movieList.querySelectorAll('.delete').forEach((item, index) => {
            item.addEventListener('click', (e) => {
                e.target.parentNode.remove();
                movieDB.movies.splice(index, 1);
                updateMovieList();
            });
        });
    }
    
    preparePage();
    updateMovieList();
    



    

//});
