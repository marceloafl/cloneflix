import { MoviesQueue } from "../models/movies-queue.js";
import { MoviesQueueView } from "../view/movies-queue-view.js";

export class MovieQueueController {
    movieQueue;
    movieQueuesView;
    myListQueue;
    continueQueue;
    popularQueue;
    clickedQueue;
    selectedQueue;

    constructor(){
        this.movieQueue = new MoviesQueue();        
        this.myListQueue = {element: document.querySelector('[data-slider="my-list"]'), place: 0};
        this.continueQueue = {element: document.querySelector('[data-slider="continue"]'), place: 0};
        this.popularQueue = {element: document.querySelector('[data-slider="popular"]'), place: 0};
    }

    selectQueue(target){  
        this.clickedQueue = target.parentNode.parentNode;
        if (this.clickedQueue === this.myListQueue['element']){
            this.selectedQueue = this.myListQueue;
        }

        if (this.clickedQueue === this.continueQueue['element']){
            this.selectedQueue = this.continueQueue;
        }

        if (this.clickedQueue === this.popularQueue['element']){
            this.selectedQueue = this.popularQueue;
        }
        this.movieQueuesView = new MoviesQueueView(this.selectedQueue);
        this.changeQueue(target);
    }
    
    changeQueue(target){
        let place = this.selectedQueue['place'];
        if(target.dataset.arrow === 'previous'){
            this.selectedQueue['place'] = this.movieQueue.moveToPrevious(place, this.movieQueuesView.queueSize);
            this.movieQueuesView.moveQueue(this.selectedQueue);
            return;

        } else if (target.dataset.arrow === 'next'){      
            this.selectedQueue['place'] = this.movieQueue.moveToNext(place, this.movieQueuesView.queueSize);
            this.movieQueuesView.moveQueue(this.selectedQueue);
            return;
        }
    }

}  



    
