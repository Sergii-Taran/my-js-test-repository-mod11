const API_KEY = '47040317-0d9018ce78b59a4267667365b';

const list = document.querySelector('.list');

const params = new URLSearchParams({
  key: API_KEY,
  q: 'formula 1',
});

fetch(`https://pixabay.com/api/?${params}}`)
  .then(responce => {
    if (!responce.ok) {
      throw new Error(responce.statusText);
    }
    return responce.json();
  })
  .then(data => {
    console.log('data', data);
    list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
  })
  .catch(error => {
    console.log('error', error);
  });

function createMarkup(arr) {
  return arr
    .map(
      ({ previewURL, tags }) => `
  <li>
  <img src="${previewURL}" alt="${tags}" width="300">
  </li>
  `
    )
    .join('');
}
