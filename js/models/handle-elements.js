export class HandleElements {
    show;
    hide;

    constructor(element){
        this.show = this.showElement(element);
        this.hide = this.hideElement(element);
    }

    showElement(element){
        element.classList.remove('hide');
    }
    
    hideElement(element){
        element.classList.add('hide');
    }
}