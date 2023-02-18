// Implement the function unique_in_order which takes as argument a sequence 
// and returns a list of items without any elements with the same value next 
// to each other and preserving the original order of elements.

const uniqueInOrder=function(iterable){
    if(typeof iterable === 'string'){
        iterable = iterable.split('');
    }
    const answer = [];
    iterable.forEach(element => {
        if(answer[answer.length-1] !== element) {
            answer.push(element);
        }
    });
    return answer;
}

console.log(uniqueInOrder([1,2,2,3,3]));