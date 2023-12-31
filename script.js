const search = document.querySelector('.search');
const item = document.querySelectorAll('li');

const searchEngine = e => {

    const text = e.target.value.toLowerCase();

    item.forEach(el => {
        /* indexOf -1 means that user input was not found in any li */
        if (el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    })

}

search.addEventListener('keyup', searchEngine);