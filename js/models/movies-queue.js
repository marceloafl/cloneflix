export class MoviesQueue {
    queue;
    place;
    placeQueue = [];

    constructor(){
        this.place = 1;
        this.queue = document.querySelectorAll('[data-place]');
    }

    seePrevious(){
        this.place -= 1;
        this.moveQueue();
    }

    seeNext(){
        this.place += 1;
        this.moveQueue();
    }


    // SUBSTITUIR OS IFs POR VARIAVEIS
    moveQueue(){
        this.queue.forEach(element => {
            if (parseInt(element.dataset.place) === this.place){
                element.classList.remove('slider--previous');
                element.classList.remove('slider--next');
                element.classList.remove('hide');
            } else if (parseInt(element.dataset.place) === this.place - 1){
                element.classList.add('slider--previous');
                element.classList.remove('slider--next');
                element.classList.remove('hide');
            } else if (parseInt(element.dataset.place) === this.place + 1){
                element.classList.add('slider--next');
                element.classList.remove('slider--previous');
                element.classList.remove('hide');
            } else if (parseInt(element.dataset.place) > this.place + 1 || parseInt(element.dataset.place) < this.place - 1){
                element.classList.add('hide')
                element.classList.remove('slider--previous')
                element.classList.remove('slider--next');
            }
        })
    }
}



