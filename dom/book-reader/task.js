const fontSizeLinks = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

function changeFontSize(event) {
    event.preventDefault();

    fontSizeLinks.forEach(link => {
        link.classList.remove('font-size_active');
    });

    event.currentTarget.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = event.currentTarget.getAttribute('data-size');

    if (size === 'small') {
        book.classList.add('book_fs-small');
    } else if (size === 'big') {
        book.classList.add('book_fs-big');
    }
}

fontSizeLinks.forEach(link => {
    link.addEventListener('click', changeFontSize);
});