export class MoviesQueue {

    moveToPrevious(place, higherPlace){
        if(place === 0){
            return place = higherPlace - 1;
        }
        return place - 1;
    }

    moveToNext(place, higherPlace){
        if (place === higherPlace - 1){
            return place = 0
        }
        return place + 1;
    }
}



