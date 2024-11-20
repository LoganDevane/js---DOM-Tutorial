var books = documents.querySelectorAll('book-list li.name')

Array.from(books).forEach(function(book){
     book.textContext += '(booktitle)' ;

});

const booklist = document.querySelector ('#Book-list')
//bookList.innerHTML = '<h2> Books and more books... </h2>
booklist.innerHTML += '<p>This is how you add HTML </p>'