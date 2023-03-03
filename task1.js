//task 1:
function like_or_dislike(lst){
    state='Nothing'
    for (let index = 0; index < lst.length; index++) {
        const vote = lst[index];
        if(state === vote){
            state = 'Nothing';
        }
        else{
            state = vote;
        }
    }
    return state;
}

console.log(like_or_dislike(["Dislike"]))
console.log(like_or_dislike(["Like", "Like"]))
console.log(like_or_dislike(["Dislike", "Like"]))
console.log(like_or_dislike(["Like", "Dislike", "Dislike"]))
console.log(like_or_dislike(["Like","Like", "Dislike", "Like","Like","Like","Like","Dislike"]))
console.log(like_or_dislike([]))
