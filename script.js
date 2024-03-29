const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

const book = getBook(1)

// const title = book.title;
// const author = book.author

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre] = genres;

// Rest/Spread Operator

const [primaryGenres, secondaryGenres, ...otherGenres] = genres;

const newGenres = [...genres, 'epic fantasy']

const updatedBook = {...book, moviePublicationDate: '2001-12-19', pages: 1210}

// ?? Operator

const count = book.reviews.librarything.reviewsCount ?? "no data"

// only return the second value when the first value is null or undefined

// Optional Chaining 

function getTotalReviewCount (book) {
  const goodreads = book.reviews.goodreads.reviewsCount;

  // This ? is Optional Chaining, program only continues in case when left side is not undefined or not null
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything
}

console.log(getTotalReviewCount(book))

// Map Method 

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x)

const books = getBooks();

const titles = books.map((book) => book.title);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}))

// Filter Method

const longBooks = books.filter((book) => book.pages > 500).filter((book) => book.hasMovieAdaptation);

const adventureBooks = books.filter((books) => books.genres.includes("adventure")).map((book) => book.title)

//Reduce Method

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);

//Sort Method
// In sort method is very important to use slice(), because otherwise oryginal array will be replaced 

const arr = [3, 7, 1, 9, 6]
const sorted = arr.slice().sort((a, b) => a -  b);

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);

// Immutable Arrays

// Add book object to array

const newBook = {
  id: 6,
  title: "Patryk Konior Document",
  author: "Patryk Konior"
};

const booksAfterAdd = [...books, newBook];

// Delete book object from array

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);

// Update book object in the array
// To update array, i should use map method

const booksAfterUpdate = booksAfterDelete.map((book) => book.id === 1 ? {...book, pages: 1210} : book)