import { Movies } from "../models/movies";

export class MoviesController {
    myList;
    mainCards;
    nextCards;
    previousCards;
    movies;

    constructor(){
        this.myList = document.querySelector('[data-container="minha-lista"]');
        this.mainCards = myList.querySelectorAll('[data-image="main"]');
        this.nextCards = myList.querySelectorAll('[data-image="next"]');
        this.previousCards = myList.querySelectorAll('[data-image="previous"]');
        this.movies = new Movies(this.showMovies());
    }

    showMovies(){
        for(let i = 0; i < previousMovies.length; i++){
            const url = previousMovies[i].Poster;
            previousCards[i].setAttribute('src', url);
        }
    
        for (let i = 0; i < mainCards.length; i++){
            const url = mainMovies[i].Poster;
            mainCards[i].setAttribute('src', url);
        }
    
        for(let i = 0; i < nextMovies.length; i++){
            const url = nextMovies[i].Poster;
            nextCards[i].setAttribute('src', url);
        }
    }   
}


