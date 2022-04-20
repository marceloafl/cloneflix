function getMovies(callback){
    const xhr = new XMLHttpRequest();
    const url = 'http://www.omdbapi.com/?apikey=a8cfbfa&s=brasil';
        
    xhr.responseType = 'json';
    xhr.open('GET', url);    
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            for(let i = 0; i < 6; i++){
                let movies = xhr.response.Search;
                let previousMovies = movies.slice(5, 10);
                let mainMovies = movies.slice(0, 5);
                let nextMovies = movies.slice(5, 10);
                callback(previousMovies, mainMovies, nextMovies);
            }
        }
    }
    xhr.send();    
}

const movies = getMovies(function(previousMovies, mainMovies, nextMovies){
    const myList = document.querySelector('[data-container="minha-lista"]');
    const mainCards = myList.querySelectorAll('[data-image="main"]');
    const nextCards = myList.querySelectorAll('[data-image="next"]');
    const previousCards = myList.querySelectorAll('[data-image="previous"]');

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
});





