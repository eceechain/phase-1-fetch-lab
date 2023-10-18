
// function to render books
function displayBooks(){
  fetch('https://anapioficeandfire.com/api/books')
  .then(response  => response.json())
  .then((data) =>{(data)
          data.forEach((book) =>{
            const cardsContainer = document.createElement('div')
            cardsContainer.classList.add('bookCard')
            cardsContainer.innerHTML = `
              <h1>${book.name}</h1>
              
            `;
            booksContainer.append(cardsContainer)  
          })
  })
}
displayBooks();