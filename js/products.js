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
    {
        name: 'Vô Lăng',
        image1: './images/product/product3.jpg',
        image2: './images/product/product4.jpg',
        old_price: '200.000đ',
        curr_price: '100.000đ'
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 ">
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
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))