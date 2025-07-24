import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';

const searchForm = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');
let meaning = '';
searchForm.addEventListener('submit', ev => {
  ev.preventDefault();
  const meaning = searchForm.elements['search-text'].value.trim();
  if (meaning === '') {
    return;
  }
  console.log(meaning);
  const result = getImagesByQuery(meaning);
  loaderEl.style.display = 'inline-block';
  console.log(result.then(result => result.data));
  if (result.hits.length === 0) {
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

  loaderEl.style.display = 'none';
});

/*
У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.
Користувач буде вводити рядок для пошуку в текстове поле, а за сабмітом форми необхідно виконувати HTTP-запит із цим пошуковим рядком.



При натисканні на кнопку відправки форми, додайте перевірку вмісту текстового поля на наявність порожнього рядка, щоб користувач не міг відправити запит, якщо поле пошуку порожнє.







Для показу повідомлень використовуй бібліотеку iziToast.


Галерея і картки зображень



Елемент галереї (список однотипних елементів <ul class=”gallery”>) уже має бути в HTML-документі. Після виконання HTTP-запитів у нього потрібно додавати розмітку карток зображень.



Кожне зображення описується об'єктом, з якого тебе цікавлять лише такі властивості:

webformatURL — посилання на маленьке зображення для списку карток у галереї
largeImageURL — посилання на велике зображення для модального вікна
tags — рядок з описом зображення. Підійде для атрибута alt
likes — кількість вподобайок
views — кількість переглядів
comments — кількість коментарів
downloads — кількість завантажень


Перед пошуком за новим ключовим словом необхідно повністю очищати вміст галереї, щоб не змішувати результати запитів.

Індикатор завантаження



Додай елемент для сповіщення користувача про процес завантаження зображень із бекенду. Завантажувач має з’являтися перед початком HTTP-запиту та зникати після його завершення.

*/
