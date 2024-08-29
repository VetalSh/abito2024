const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cardWrapper = document.querySelector('.content-main__list');

const cardArray = [
    {
        id: 0,
        title: 'Product 1',
        price: '150 $',
        address: 'New Yourk, Baker str.',
        date: '10 july 11:39',
        img: './image/card-img.png'
    },
    {
        id: 1,
        title: 'Product 2',
        price: '160 $',
        address: 'New Yourk, Baker str.',
        date: '10 july 11:39',
        img: './image/card-img.png'
    },
    {
        id: 2,
        title: 'Product 3',
        price: '170 $',
        address: 'New Yourk, Baker str.',
        date: '10 july 11:39',
        img: './image/card-img.png'
    },
    {
        id: 3,
        title: 'Product 4',
        price: '180 $',
        address: 'New Yourk, Baker str.',
        date: '10 july 11:39',
        img: './image/card-img.png'
    },
    {
        id: 4,
        title: 'Product 5',
        price: '190 $',
        address: 'New Yourk, Baker str.',
        date: '10 july 11:39',
        img: './image/card-img.png'
    },
    {
        id: 5,
        title: 'Product 6',
        price: '200 $',
        address: 'New Yourk, Baker str.',
        date: '10 july 11:39',
        img: './image/card-img.png'
    },
]

const render = (cardList) => {
    cardWrapper.innerHTML = ''

    cardList.forEach(item => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="/product.html" class="content-main__list-item">
                <div class="content-main__list-item--img">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <h5 class="content-main__list-item--title">${item.title}</h5>
                <strong class="content-main__list-item--price">${item.price}</strong>
                <div class="content-main__list-item--desc-box">
                    <span class="content-main__list-item--desc">${item.address}</span>
                    <span class="content-main__list-item--desc">${item.date}</span>
                </div>
            </a>
        `)
    });
}

const filteredArray = (array, filter) => {
    return array.filter((item) => {
        return item.title.includes(filter) || item.price.includes(filter)
    })
}

render(cardArray)

searchBtn.addEventListener('click', () => {
    render(filteredArray(cardArray, searchInput.value))
})