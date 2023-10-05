function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp =>resp.json())
  .then((books) => {
    books.forEach((book) => {
      const renderBook1 = renderBooks(book)
    })
  }
)}

function renderBooks(book) {
  const main = document.querySelector('main');
    const renderBook1 = document.createElement('h2');
    renderBook1.innerHTML = book.name;
    main.appendChild(renderBook1);
  return main;
}
renderBooks();

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();

});
