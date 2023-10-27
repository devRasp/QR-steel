function score(list){

    let turn = "odd";
    let first_score = 0;
    let second_score = 0;

    if(turn == "odd"){

        first_score += list[0];
        turn = "even";

        for(let i=0; i<list.length-1; i++){
            list[i] = list[i+1]; 
        }

        if(list[0] % 2 == 0){
            list = list.reverse();
        }

    }else{

        second_score += list[0];
        turn = "odd";

        for(let i=0; i<list.length-1; i++){
            list[i] = list[i+1]; 
        }

        if(list[0] % 2 == 0){
            list = list.reverse();
        }

    }

    return first_score - second_score;
}

console.log(score (list =[5, 4, 5, 2, 1]))  //  5+1+5      4+2
console.log(score (list =[2, 2, 2]))  //  2+2  2