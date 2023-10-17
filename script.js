const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const searchEngine = e => {
    const text = e.target.value;
}

search.addEventListener('keyup', searchEngine);