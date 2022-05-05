function showElement(element){
    element.classList.remove('hide');
}

function hideElement(element){
    element.classList.add('hide');
}

// MENU ACCOUNT
const account = document.querySelector('[data-icon="account"]');
const secondaryMenu = document.querySelector('[data-menu="secondary"]');

account.addEventListener('mouseover', function(){
    const element = secondaryMenu;
    showElement(element);  
})

secondaryMenu.addEventListener('mouseleave', function(){
    const element = secondaryMenu;
    hideElement(element);    
})


// VER TUDO TÍTULO
const titles = document.querySelectorAll('[data-title]');
titles.forEach(title => {
    title.addEventListener('mouseover', function(){
        const element = title.lastChild.previousSibling;
        showElement(element);
    })

    title.addEventListener('mouseleave', function(){
        const element = title.lastChild.previousSibling;
        hideElement(element);
    })
})

// SETA LIDER
const sliderQueue = document.querySelectorAll('[data-slider]');
sliderQueue.forEach(slider => {
    slider.addEventListener('mouseover', function(){
        const elementPrevious = slider.firstChild.nextSibling;
        const elementNext = slider.lastChild.previousSibling;
        showElement(elementPrevious);
        showElement(elementNext);
    });

    slider.addEventListener('mouseleave', function(){
        const elementPrevious = slider.firstChild.nextSibling;
        const elementNext = slider.lastChild.previousSibling;
        hideElement(elementPrevious);
        hideElement(elementNext);
    })
})

// MENU MOBILE
const btnMobileMenu = document.querySelector('[data-button="mobile-menu"]');
const mobileMenu = document.querySelector('[data-menu="mobile"]');

btnMobileMenu.addEventListener('mouseover', function(){
    const element = mobileMenu;
    showElement(element);  
})

mobileMenu.addEventListener('mouseleave', function(){
    const element = mobileMenu;
    hideElement(element);    
})