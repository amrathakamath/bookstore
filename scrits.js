const books = [
    { title: "HAMLET", author: "RUSELL PUNTER", cover: "https://tse4.mm.bing.net/th?id=OIP.Bq_c5X2QSBq3bXMlJXg6JQHaLM&pid=Api&P=0&h=180" },
    { title: "THE WAR OF SWORDS", author: "D. BARKLEY BRIGS", cover: "https://acepub.com/wp-content/uploads/2014/05/WarSwordsCoverDeanEdit.jpg" },
    
  ];
  
  function displayBooks(bookArray) {
    const bookGrid = document.querySelector('#book-grid');
    bookGrid.innerHTML = '';
    bookArray.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('col-md-4', 'mb-4');
      bookItem.innerHTML = `
        <div class="card">
          <img src="${book.cover}" class="card-img-top" alt="${book.title}">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">${book.author}</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      `;
      bookGrid.appendChild(bookItem);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    displayBooks(books);
  });
  
