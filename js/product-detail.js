document.querySelectorAll('.product-img-item').forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src')
        document.querySelector('#product-img > img').setAttribute('src', img)
    })
})

document.querySelector('#view-all-description').addEventListener('click', () => {
    let content = document.querySelector('.product-detail-description-content')
    content.classList.toggle('active')
    document.querySelector('#view-all-description').innerHTML = content.classList.contains('active') ? 'Thu gọn' : 'Xem thêm'
})

let products = [
    {
        name: 'Vô Lăng',
        image1: './images/product/product3.jpg',
        image2: './images/product/product4.jpg',
        old_price: '200.000đ',
        curr_price: '100.000đ'
    },
    {
        name: 'Vô Lăng',
        image1: './images/product/product3.jpg',
        image2: './images/product/product4.jpg',
        old_price: '200.000đ',
        curr_price: '100.000đ'
    },
    {
        name: 'Vô Lăng',
        image1: './images/product/product3.jpg',
        image2: './images/product/product4.jpg',
        old_price: '200.000đ',
        curr_price: '100.000đ'
    },
    {
        name: 'Vô Lăng',
        image1: './images/product/product3.jpg',
        image2: './images/product/product4.jpg',
        old_price: '200.000đ',
        curr_price: '100.000đ'
    },
    {
        name: 'Vô Lăng',
        image1: './images/product/product3.jpg',
        image2: './images/product/product4.jpg',
        old_price: '200.000đ',
        curr_price: '100.000đ'
    },
    {
        name: 'Vô Lăng',
        image1: './images/product/product3.jpg',
        image2: './images/product/product4.jpg',
        old_price: '200.000đ',
        curr_price: '100.000đ'
    },
]

let product_list = document.querySelector('#related-products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">Mua ngay</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)

let rates = [
    {
        name: 'Phạm Hoàng Hiệp',
        image: './images/brand2.png',
        content: '10 điểm'
    },
    {
        name: 'Trần Xuân Bảng',
        image: './images/brand3.png',
        content: '10 điểm'
    },
    {
        name: 'Phạm Hoàng Hiệp',
        image: './images/brand4.png',
        content: '10 điểm'
    },
]

let rate_list = document.querySelector('#rate')

renderRates = (rates) => {
    rates.forEach(e => {
        let prod = `
        <div class="user-rate">
        <div class="user-info">
            <div class="user-avt">
                <img src="${e.image}" alt="">
            </div>
            <div class="user-name">
                <span class="name">${e.name}</span>
                <span class="rating">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                </span>
            </div>
        </div>
        <div class="user-rate-content">
            ${e.content}
        </div>
    </div>
        `
        rate_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderRates(rates)