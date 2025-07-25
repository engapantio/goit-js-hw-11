import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import * as rendered from './js/render-functions';
const searchForm = document.querySelector('.form');
console.log(rendered);
let meaning = '';
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  rendered.showLoader();
  rendered.clearGallery();
  meaning = searchForm.elements['search-text'].value.trim();
  if (meaning === '') {
    return;
  }
  // console.log(meaning);
  getImagesByQuery(meaning)
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error({
          backgroundColor: '#ef4040',
          class: 'error-message',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fff',
          messageSize: '16px',
          messageLineHeight: 1.5,
          position: 'topRight',
          iconUrl: '/img/x-octagon.svg',
        });
        return;
      }
      rendered.hideLoader();
      rendered.createGallery(response.data.hits);
    })
    .catch(error => {
      console.error(error);
    });

  //console.log(result);
  // if (result.hits.length === 0) {
  //   iziToast.error({
  //     backgroundColor: '#ef4040',
  //     class: 'error-message',
  //     message:
  //       'Sorry, there are no images matching your search query. Please try again!',
  //     messageColor: '#fff',
  //     messageSize: '16px',
  //     messageLineHeight: 1.5,
  //     position: 'topRight',
  //     iconUrl: '/img/x-octagon.svg',
  //   });
  //   return;
  // }
});

/*
У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.
Користувач буде вводити рядок для пошуку в текстове поле, а за сабмітом форми необхідно виконувати HTTP-запит із цим пошуковим рядком.



При натисканні на кнопку відправки форми, додайте перевірку вмісту текстового поля на наявність порожнього рядка, щоб користувач не міг відправити запит, якщо поле пошуку порожнє.







Для показу повідомлень використовуй бібліотеку iziToast.


Галерея і картки зображень



Елемент галереї (список однотипних елементів <ul class=”gallery”>) уже має бути в HTML-документі. Після виконання HTTP-запитів у нього потрібно додавати розмітку карток зображень.





Індикатор завантаження



Додай елемент для сповіщення користувача про процес завантаження зображень із бекенду. Завантажувач має з’являтися перед початком HTTP-запиту та зникати після його завершення.

*/
