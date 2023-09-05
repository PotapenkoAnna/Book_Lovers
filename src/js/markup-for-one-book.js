import svg from 'bundle-text:../images/x-close.svg'
export default function markupForOneBook(book) {
    const buyLinks = book.buy_links || [];

    const buyLinksHTML = sliceArray.map(({url, name}) => `
        <li class="">
            <a href="${url}" target="_blank">
                <img class="shopping__list__link__images" src="${getLinkImageSource(name)}" alt="link books">
            </a>
        </li>
    `).join('');

    return `
        <div class="backdrop">
            <div class="modal-window">
            <button type="button" class="close-button"><svg class="close-svg" width="24" height="24">
            ${svg}
         </svg></button>
                <img class="best-books-img" src="${book.book_image}" alt="${book.title}" width="218" height="316">
                <h3 class="book-title" data-name="${book.title}">${book.title}</h3>
                <p class="author-bestsellers" data-name="${book.author}">${book.author}</p>
                <p class="descriptions" data-name="${book.description}">${book.description}</p>
                <div class="buy-links">
                    <ul class="">
                        ${buyLinksHTML}
                    </ul>
                </div>
                <button type="button" class="add-to-shopping-list">Add to shopping list</button>
            </div>
        </div>
    `;
}

function getLinkImageSource(linkName) {
    const linkImageMappings = {
        "Amazon": require('../images/shopping-list/link-svg/image1.svg'),
        "Apple Books": require('../images/shopping-list/link-svg/image2.svg'),
        "Barnes and Noble": require('../images/shopping-list/link-svg/image3.svg'),
    };

    return linkImageMappings[linkName] || '';
}
