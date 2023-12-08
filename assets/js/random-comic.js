import * as params from '@params';

function setRandomComicButtonURLs() {
    const comicIndexURL = params.baseURL + 'comic/index.json';
    const randomButtonClass = 'random-page';

    fetch(comicIndexURL)
        .then(response => response.json())
        .then(json => extractAllComicURLs(json))
        .then(comicURLs => getRandomElement(comicURLs))
        .then(randomComicURL => setHrefOfElementsWithClass(randomButtonClass, randomComicURL))
        .catch(error => console.error(error));
}

function extractAllComicURLs(json) {
    return json['pageURLs'];
}

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function setHrefOfElementsWithClass(cls, url) {
    const elements = Array.from(document.getElementsByClassName(cls));
    elements.forEach(el => el.href = url);
}

document.addEventListener('DOMContentLoaded', () => setRandomComicButtonURLs());