const navOpneButton = document.querySelector('.mobile-menu-open')
const navCloseButton = document.querySelector('.mobile-menu-close')
const mobileMenu = document.querySelector('.nav-menu')
const header = document.querySelector('.nav-bar')

//Open and close mobile menu
navOpneButton.addEventListener('click', () => {
    mobileMenu.style.display = 'flex'
    navOpneButton.style.display = 'none'
    navCloseButton.style.display = 'block'
    header.style.background = '#343434'
})

navCloseButton.addEventListener('click', () => {
    mobileMenu.animation_name = 'heightchange2'
    mobileMenu.style.display = 'none'
    navOpneButton.style.display = 'block'
    navCloseButton.style.display = 'none'
    header.style.background = 'transparent'

})

// Change nav background color on scroll
window.addEventListener('scroll', () => {
    let scrolledPixels = window.scrollY;

    if (scrolledPixels >= 50) {
        header.style.background = '#343434';
        mobileMenu.style.background = '0000009b'

        navCloseButton.addEventListener('click', () => {
            header.style.background = '#343434'

        })
    }
    else {
        header.style.background = 'transparent'
    }
})
