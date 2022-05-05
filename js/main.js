import { MovieQueueController } from "./controllers/movies-queue-controller.js";

const queueController = new MovieQueueController();


const arrows = document.querySelectorAll('[data-arrow]');
arrows.forEach(queue => {
    queue.addEventListener('click', event => {
        event.preventDefault();
        queueController.selectQueue(event.target);        
    });
})