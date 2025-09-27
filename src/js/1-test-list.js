const list = document.querySelector('.todo-list');

const params = new URLSearchParams({
  _limit: 10,
  _page: 3,
});

console.log(params.toString());

fetch(`https://jsonplaceholder.typicode.com/todos?${params}`)
  .then(responce => {
    if (!responce.ok) {
      throw new Error('Oooops!');
    }

    return responce.json();
  })
  .then(data => {
    list.insertAdjacentHTML('beforeend', createMarkup(data));
  })
  .catch(error => {
    list.insertAdjacentHTML(
      'beforeend',
      `
      <li>
      <p>${error}</p>
      </li>
      `
    );
  });

function createMarkup(arr) {
  return arr
    .map(
      ({ title, completed }) => `
  <li class="list-item">
  <input type="checkbox" ${completed && 'checked'}/>
  <p>${title}</p>
  </li>
  `
    )
    .join('');
}

// --- Зовнішня обробка запиту --- //

// const list = document.querySelector('.todo-list');

// function requestServer(url) {
//   return fetch(url).then(data => {
//     if (!data.ok) {
//       throw new Error(data.status);
//     }

//     return data.json();
//   });
// }

// requestServer(`https://jsonplaceholder.typicode.com/users`)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log('error', error);
//   });

// requestServer(`https://jsonplaceholder.typicode.com/photos`)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log('error', error);
//   });
