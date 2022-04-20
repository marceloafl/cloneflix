function showElement(element){
    element.classList.remove('hide');
}

function hideElement(element){
    element.classList.add('hide');
}

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

const sliderQueue = document.querySelectorAll('[data-slider]');
sliderQueue.forEach(slider => {
    slider.addEventListener('mouseover', function(){
        const elementPrevious = slider.firstChild.nextSibling;
        const elementNext = slider.lastChild.previousSibling;
        showElement(elementPrevious);
        showElement(elementNext);
    })

    slider.addEventListener('mouseleave', function(){
        const elementPrevious = slider.firstChild.nextSibling;
        const elementNext = slider.lastChild.previousSibling;
        hideElement(elementPrevious);
        hideElement(elementNext);
    })
})