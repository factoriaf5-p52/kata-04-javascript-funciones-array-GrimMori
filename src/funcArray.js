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
        // console.log(list[0])
        return list[0];
    }
}

/* export function sumArray(list){
    let sum = 0;
    for(let i = 0; i < list.length; i++){
        sum += list[i];
		console.log(sum);
    }
	console.log("total: " + sum);
	return sum;
}
 */

// bonus: using reduce()
export function sumArray(list){
    if(list.length < 1){
        return 0;
    } else {
    let sum = list.reduce((a, b) => a + b);
    // console.log(sum);
	return sum;
    }
}

export function averageNumbers(list){
    if(list.length < 2){
        return list[0];
    } else {
	let sum = list.reduce((a, b) => a + b);
	sum = sum / list.length;
	// console.log("average: " + sum)
	return sum;
    }
}

export function averageWordLength(list){
    if(list.length < 1){
		return undefined;
    } else if(list.length == 1){
        return list[0].length;
	} else {
		let lengthofwords = [];
		for (let i = 0; i < list.length; i++){
			lengthofwords.push(list[i].length);
			// console.log((i+1) + ": " + lengthofwords[i])
		}
		let sum = lengthofwords.reduce((a, b) => a + b);
		sum = sum / list.length;
		// console.log("average length of words: " + sum);
		return sum;
    }
}

export function uniquifyArray(list){
	let o_length = list.length;
	let sorted;
    // if the array only has 1 element, return the whole array
	if(list.length == 1){
		return list;

    // if the array is empty, return undefined
	} else if(list.length < 1){
        return list[0];

    // if the array has multiple elements, uniquify
    } else {
		console.log("input: \n" + list + "\n");
		sorted = list.sort(); // new sorted array
		let i;
		for(let i = 0; i < sorted.length; i++){
			if(sorted[i] == sorted[i+1]){ // if index is same as next index
				sorted.splice(i, 1, ""); // replace index with empty
			}
		}
        // sort by length so empty values move to the beginning of the array
		sorted.sort((a, b) => a.length - b.length); 
		for(let i = 0; i < sorted.length; i++){
			if(sorted[0] == ""){
				sorted.shift(); // remove empty values
			}
			// console.log("LOG input length: " + list.length);
		}
		console.log("input length: " + o_length);
		console.log("sorted length: " + sorted.length);
        // if length of the array has not changed we should return 
        // the original unmodified list, without sorting
		if(sorted.length == o_length){ 
			console.log("output: \n" + list + "\n\n\n");
			return list;
		} else {
			console.log("output: \n" + sorted + "\n\n\n\n");
			return sorted;
		}
	}
}

export function doesWordExist(list, word){
    if(list.includes(word) && list.length > 0){
        return true;
    } else {
        return false;
    }
}

export function howManyTimes(list, word){
    let count = 0;
    if(list.length < 1){
		return undefined;
	} else {
    for(let i = 0; i < list.length; i++){
        if(word === list[i]){
            count++;
        }
    }
    console.log("word count: " + count);
    return count;
    }
}

export function greatestProduct(){}





