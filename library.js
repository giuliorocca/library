function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return `${title}` +", by " +`${author}` +", " +`${pages}` +", " +`${read}`;
    }
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", "345 pages", "not read yet")

theHobbit.info();
console.log(theHobbit.info());

let myLibrary = [];

function addBookToLibrary(){
    newBookTitle = input("Book title?");
    newBookAuthor = input("Book author?");
    
}
