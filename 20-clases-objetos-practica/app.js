/*
- Crea una clase libro,
- La clase libro tendra titulo, autor, año y genero,
-Crea un metodo que devuelva toda la infromacion del libro,
- Pide 3 libros y guardalos en un array.
- Los libros se introduciran al arrancar el programa pidiendo los datos con el prompt,
- Validar que los campos no se introduzcan vacios,
- Validar que el año sea un numero y que tenga 4 digitos,
- Validar que el genero sea: aventuras terror o fantasia,
- Crea una funcion que muestre todos los libros,
- Crea una funcion que muestre los autores ordenados alfabeticamente,
- Crea una funcion que pida el genero y muestre la informacion de los libros que pertenezcan a ese genero usando el metodo que devuelve la informacion.

*/

//- Crea una clase libro:
class Book {
  constructor(title, author, year, gender) {
    this.title = title;
    this.author = author,
      this.year = year;
    this.gender = gender;
  }

  getAuthor() {
    return this.author;
  }

  getGender() {
    return this.gender;
  }

  bookInfo() {
    return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`;
  }

}

let books = [];

while (books.length < 1) {
  let title = prompt('Introduce el titulo del libro');
  let author = prompt('Introduce el autor del libro');
  let year = prompt('Introduce el año del libro: 1923');
  let gender = prompt('Introduce el genero del libro dentro de las opciones: aventura, terror, fantasia').toLowerCase();

  if (title != ''
    && author != ''
    && !isNaN(year)
    && year.length == 4
    && (gender == 'aventura' || gender == 'terror' || gender == 'fantasia')) {
    books.push(new Book(title, author, year, gender));
  }
}

const showAllBooks = () => {
  console.log(books);
}

// showAllBooks();
const showAuthors = () => {
  let authors = [];
  for (const book of books) {
    console.log(book.getAuthor());
    authors.push(book.getAuthor());
    console.log(authors.sort());
  }
}

// showAuthors();
const showGender = () => {
  const gender = prompt('Introduce al genero a buscar:');
  for (const book of books) {
    if (book.getGender() == gender) {
      console.log('entre');
      console.log(book.bookInfo());
    }
  }
}

showGender();