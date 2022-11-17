const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy'},
    {title: 'Total enlightenment', pages: 250, genre: 'romance'},
    {title: 'Big loss', pages: 400, genre: 'fantasy'},
    {title: 'Tenth Joy', pages: 32, genre: 'action'},
    {title: 'Quickfix', pages: 15, genre: 'fantasy'},
    {title: 'World Ender', pages: 199, genre: 'fantasy'},
    {title: 'Paranormal', pages: 200, genre: 'thriller'},
];
const filterTitleStartsWithTotal = (list) => list.filter((book) => book.title.startsWith('Total'));
const filterGenreIsFantasy = (list) => list.filter((book) => book.genre === 'fantasy');

const mapToPages = (list) => list.map(({pages}) => pages);
const sumPages = (book) => book.reduce((currSum, newPage) => currSum + newPage)

const badCompose = (fn1, fn2, fn3) => (x) => fn3(fn2(fn1(x)));

const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const titleStartsWithTotalPages = compose(sumPages, mapToPages, filterTitleStartsWithTotal);
const genreIsFantasyPages = compose(sumPages, mapToPages, filterGenreIsFantasy);

console.log(titleStartsWithTotalPages(books));
console.log(genreIsFantasyPages(books));