import * as params from '@params';

function setRandomComicButtonURLs() {
    // Reads the sitemap for a list of all comic page URLs and sets the "random comic" buttons to a random URL.
    // Comic page URLs are assumed to contain the string '/comic/'.
    const sitemapURL = params.baseURL + 'sitemap.xml'
    const randomButtonClass = 'random-page'

    fetch(sitemapURL)
        .then(response => response.text())
        .then(xml => extractAllComicURLs(xml))
        .then(comicURLs => getRandomElement(comicURLs))
        .then(randomComicURL => setHrefOfElementsWithClass(randomButtonClass, randomComicURL))
        .catch(error => console.error(error));
}

function extractAllComicURLs(xml) {
    const xmlDoc = parseXML(xml);
    const locElements = Array.from(xmlDoc.getElementsByTagName('loc'));
    return locElements.filter(el => el.textContent.includes('/comic/')).map((el) => el.textContent)
}

function parseXML(xml) {
    const parser = new DOMParser();
    return parser.parseFromString(xml, "text/xml");
}

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function setHrefOfElementsWithClass(cls, url) {
    const elements = Array.from(document.getElementsByClassName(cls));
    elements.forEach(el => el.href = url)
}

document.addEventListener('DOMContentLoaded', () => setRandomComicButtonURLs());