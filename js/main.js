import { MovieQueueController } from "./controllers/movies-queue-controller.js";

const queueController = new MovieQueueController();
const queueMyMovies = document.querySelector('[data-slider="previous"]');
queueMyMovies.addEventListener('click', event => {
    event.preventDefault();
    queueController.changeQueue(event.target);
    
});