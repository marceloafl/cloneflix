export class MoviesQueueView {
    selectedQueue;
    queuePlace;
    queueSize;
    elementsInQueue;

    constructor(queue){
        this.selectedQueue = queue['element'];        
        this.elementsInQueue = this.selectedQueue.querySelectorAll('[data-place]');
        this.queueSize = this.elementsInQueue.length;
    }

    moveQueue(queue){
        this.queuePlace = queue['place'];
        this.elementsInQueue.forEach(element => {
            if (parseInt(element.dataset.place) === this.queuePlace){
                element.classList.remove('slider--queue');
                element.classList.remove('slider--previous');
                element.classList.remove('slider--next');
                element.classList.remove('hide');
                element.classList.add('slider--current');
            } else if (parseInt(element.dataset.place) === this.queuePlace - 1){
                element.classList.add('slider--queue');
                element.classList.add('slider--previous');
                element.classList.remove('slider--next');
                element.classList.remove('hide');
                element.classList.remove('slider--current');
            } else if (parseInt(element.dataset.place) === this.queuePlace + 1){
                element.classList.add('slider--queue');
                element.classList.add('slider--next');
                element.classList.remove('slider--previous');
                element.classList.remove('hide');
                element.classList.remove('slider--current');
            } else if (parseInt(element.dataset.place) > this.queuePlace + 1 || parseInt(element.dataset.place) < this.queuePlace - 1){
                element.classList.remove('slider--queue');
                element.classList.add('hide')
                element.classList.remove('slider--previous')
                element.classList.remove('slider--next');
                element.classList.remove('slider--current');
            }
        })        
    }
}





