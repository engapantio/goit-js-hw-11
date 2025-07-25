import axios from 'axios';
export default function getImagesByQuery(query) {
  // axios.defaults.headers.common['Access-Control-Allow-Origin'] =
  //   'http://localhost:5173';
  axios.defaults.baseURL = 'https://pixabay.com';
  return axios.get('/api/', {
    params: {
      key: '51453441-8ba936d16adf232cd1ca4d1fd',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  // .then(response => {
  //   console.log(response.data);
  //   console.log(result);
  //   result = response.data;
  //   console.log(result);
  //   return result;
  // })
  // .catch(error => {
  //   console.error(error);
  // });
}
console.log(getImagesByQuery('dog'));
/*
Для організації коду використовуй модульність та синтаксис export/import.

У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

getImagesByQuery(query). Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.

HTTP-запити

Додай у проєкт бібліотеку Axios для написання коду, пов’язаного з HTTP-запитами.


Для бекенду використовуй публічний API сервіс Pixabay. Зареєструйся, отримай свій унікальний ключ доступу і ознайомся з документацією.

Список параметрів рядка запиту, які тобі обов'язково необхідно вказати:

key — твій унікальний ключ доступу до API.
q — слово для пошуку. Те, що буде вводити користувач.
image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
orientation — орієнтація фотографії. Постав значення horizontal.
safesearch — фільтр за віком. Постав значення true.


У відповіді буде об’єкт із декількома властивостями, в одному з яких (hits) буде масив об’єктів із зображеннями, що задовольнили критерії параметрів запиту.

Обов’язково винеси функції для HTTP-запитів у файл pixabay-api.js у папці js. Це хороша практика та можливість відпрацювати модульний підхід до розробки.


Якщо бекенд повертає порожній масив, це означає, що нічого підходящого не було знайдено. У такому випадку відображай повідомлення з текстом:

Sorry, there are no images matching your search query. Please try again!

*/
