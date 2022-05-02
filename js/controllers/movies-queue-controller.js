import { MoviesQueue } from "../models/movies-queue.js";

export class MovieQueueController {
    arrowPrevious;
    arrowNext;
    arrowSelected

    constructor(){
        this.arrowPrevious = document.querySelector('[data-arrow="previous"]');
        this.arrowNext = document.querySelector('[data-arrow="next"]');
        this.arrowSelected = new MoviesQueue();
    }

    changeQueue(target){        
        if(target === this.arrowPrevious){
            this.arrowSelected.seePrevious();
            return;
        }
        this.arrowSelected.seeNext();
    }

    
}