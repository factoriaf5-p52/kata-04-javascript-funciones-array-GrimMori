/* Encuentra el máximo */

export function maxOfTwoNumbers(a, b){
    if(a>b){
        return a;
    } else if(b>a){
        return b;
    } else {
        return a;
    }
}

export function findLongestWord(list){
    if(list.length < 2){
        return list[0];
    } else {
        list.sort((a, b) => b.length - a.length);
        console.log(list[0])
        return list[0];
    }
}

export function sumArray(list){
    let sum = 0;
    for(let i = 0; i < list.length; i++){
        sum += list[i];
		console.log(sum);
    }
	console.log("total: " + sum);
	return sum;
}

export function averageNumbers(){}

export function averageWordLength(){}

export function uniquifyArray(){}

export function doesWordExist(){}

export function howManyTimes(){}

export function greatestProduct(){}





