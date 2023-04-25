const navOpneButton = document.querySelector('.mobile-menu-open')
const navCloseButton = document.querySelector('.mobile-menu-close')
const mobileMenu = document.querySelector('.nav-menu')
const header = document.querySelector('.nav-bar')
navLinks = document.querySelectorAll(".nav-link")

//Mobile links variables
const mobileLinksVariables = () => {
    mobileMenu.animation_name = 'heightchange2'
    mobileMenu.style.display = 'none'
    navOpneButton.style.display = 'block'
    navCloseButton.style.display = 'none'
    header.style.background = 'transparent'
}

//Open and close mobile menu
navOpneButton.addEventListener('click', () => {
    mobileMenu.style.display = 'flex'
    navOpneButton.style.display = 'none'
    navCloseButton.style.display = 'block'
    header.style.background = '#343434'

    navLinks.forEach(navLink => {
        navLink.addEventListener('click', mobileLinksVariables)
    })
})

//Close mobile menu
navCloseButton.addEventListener('click', mobileLinksVariables)

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


//scroll to a section
navLinks.forEach(navLink => {
    navLink.addEventListener('click', (event) => {
        link = navLink.getAttribute("href")
        if (link && link.startsWith("#")) {
            link = link.substring(1);
            event.preventDefault();
            section = document.getElementById(link)
        }

        const scrolledSectionPixels = section.offsetTop;

        window.scrollTo(
            { top: scrolledSectionPixels - 100, behavior: "smooth" }
        )
        //console.log(scrolledSectionPixels)
    })
});
