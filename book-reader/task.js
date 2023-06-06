fontControl = Array.from(document.querySelectorAll('.font-size'))
book = document.querySelector('.book')


fontControl.forEach(element => {
    element.onclick = (event) => {
        document.querySelector('.font-size_active').classList.toggle('font-size_active')
        event.target.classList.toggle('font-size_active')
        switch (event.target.getAttribute('data-size')){
            case 'small': book.className = 'book book_fs-small'; break;
            case 'big': book.className = 'book book_fs-big'; break;
            default: book.className = 'book'; break;
        }
        return false;
    }
});