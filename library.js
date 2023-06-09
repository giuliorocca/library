let myLibrary = [];
const libraryContainer = document.getElementById("libraryContainer");
const addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", addBook);

// Define constructor function that accepts 4 arguments representing the book details
// The function within the constructor returns a string description of the book
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return `${title}` +", by " +`${author}` +", " +`${pages}` +", " +`${read}`;
    }
}

// Define a function that prompts the user for a book's details using a form
// Submit button pushes book's information into myLibrary array
function addBook() {
    // Check if a form is already present on the page
    if (document.querySelector(".formDiv")) {
        return;
    }
    
    const formDiv = document.createElement("div");
    formDiv.classList.add("formDiv");
    
    // Title input
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Title");
    titleInput.style.marginBottom = "10px";
    formDiv.appendChild(titleInput);

    // Author input
    const authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("placeholder", "Author");
    authorInput.style.marginBottom = "10px";
    formDiv.appendChild(authorInput);

    // Pages input
    const pagesInput = document.createElement("input");
    pagesInput.setAttribute("type", "number");
    pagesInput.setAttribute("placeholder", "Pages");
    pagesInput.style.marginBottom = "10px";
    formDiv.appendChild(pagesInput);

    // Read status input
    const readInput = document.createElement("select");
    const readOption1 = document.createElement("option");
    readOption1.setAttribute("value", "read");
    readOption1.innerText = "Read";
    const readOption2 = document.createElement("option");
    readOption2.setAttribute("value", "not-read");
    readOption2.innerText = "Not read";
    readInput.style.marginBottom = "15px";
    readInput.appendChild(readOption1);
    readInput.appendChild(readOption2);
    formDiv.appendChild(readInput);

    // Submit button
    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.addEventListener("click", function() {
        
        // Push book info into myLibrary array
        const title = titleInput.value;
        const author = authorInput.value;
        const pages = pagesInput.value;
        const read = readInput.value;
        const book = new Book(title, author, pages, read);
        myLibrary.push(book);
        displayLibrary();
        
        // Clear form
        titleInput.value = "";
        authorInput.value = "";
        pagesInput.value = "";
        readInput.value = "read";
        });

    formDiv.appendChild(submitButton);

    // Append form div to the body
    document.body.appendChild(formDiv);
}

// Define a function that loops through the books in the library array 
// and create a div populated with each book's info as text
function displayLibrary () {
    libraryContainer.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        
        // Create separate elements for each property
        const titleElement = document.createElement("p");
        titleElement.textContent = `Title: ${book.title}`;
        bookDiv.appendChild(titleElement);

        const authorElement = document.createElement("p");
        authorElement.textContent = `Author: ${book.author}`;
        bookDiv.appendChild(authorElement);

        const pagesElement = document.createElement("p");
        pagesElement.textContent = `Pages: ${book.pages}`;
        bookDiv.appendChild(pagesElement);

        const readElement = document.createElement("p");
        readElement.textContent = `Read: ${book.read}`;
        bookDiv.appendChild(readElement);

        // Add a toggle read status button
        const readStatusButton = document.createElement("button");
        readStatusButton.innerText = "Change Read Status";
        readStatusButton.addEventListener("click", function() {
            if (book.read == "read") {
                book.read = "not-read";
            }
            else {
                book.read = "read";
            }
            displayLibrary();
        })    

        // Add a delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete Book";
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", function() {
            myLibrary.splice(i, 1);
            displayLibrary();
        })    

        libraryContainer.appendChild(bookDiv);
        bookDiv.appendChild(deleteButton);
        bookDiv.appendChild(readStatusButton);

    }
}
