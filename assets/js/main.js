//render products
const productsContainer = document.querySelector('.product__list .row')

let visibleProducts = 10
let currentIndex = 0

const renderProduct = (start, count) => {
    for (let i = start; i < start + count; i++) {
        const index = (i + 1).toString().padStart(2, '0')

        if (i >= 25) {
            break
        }

        const productItem = `
            <div class="col-2-4 col-md-3 col-sm-4 col-12">
                <div class="product__item">
                    <img src="./assets/images/products/product-${index}.png" class="product__item__img">
                    <div class="product__item__name">[What happend] How to create</div>
                    <div class="d-flex justify-content-between flex-wrap">
                        <span class="product__item__price">2,500 won</span>
                        <span class="product__item__likes" title="Likes">
                            <i class="fa-solid fa-heart"></i>
                            236
                        </span>
                    </div>
                </div>
            </div>
        `
        productsContainer.insertAdjacentHTML('beforeend', productItem)
    }
}

if (productsContainer) {
    renderProduct(currentIndex, visibleProducts)
}

// load more products
const btnLoadMore = document.querySelector('.btn__load-more.product')

if (btnLoadMore) {
    btnLoadMore.onclick = e => {
        e.stopPropagation()
    
        currentIndex += visibleProducts
        renderProduct(currentIndex, visibleProducts)
    
        if (currentIndex + visibleProducts >= 25) {
            btnLoadMore.style.display = 'none'
        }
    }
}

// open navbar mobile
const btnOpenNavbar = document.querySelector('.navbar__menu.mobile i')

if (btnOpenNavbar) {
    const navbar = document.querySelector('.navbar-mobile')

    btnOpenNavbar.onclick = e => {
        e.stopPropagation()
        navbar.classList.toggle('active')
    }

    document.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active')
        }
    })

    navbar.addEventListener('click', e => {
        e.stopPropagation()
    })
}

// close navbar mobile
const btnCloseNavbar = document.querySelector('.navbar-mobile__close')

if (btnCloseNavbar) {
    const navbar = document.querySelector('.navbar-mobile')

    btnCloseNavbar.onclick = () => {
        navbar.classList.remove('active')
    }
}