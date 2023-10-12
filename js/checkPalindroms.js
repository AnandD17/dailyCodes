const checkPalindrome = (str) => {
    let start = 0;
    let end = str.length-1;
    // console.log(end);

    while(start<end ){
        // console.log(str[start], str[end], start, end);
        if(str[start]==str[end]){
            start++;
            end--;
        }
        else{
            return false;
        }
    }
    return true
}

const checkSubstringPlalindrome = (str) => {
    let count = 0;
    for(let i = 0 ; i < (str.length-1) ; i++){
        // console.log(i);
        for(let j = i+1; j < str.length ; j++){
            if(checkPalindrome(str.slice(i, j+1))) count++;
        }
    }
    return count
}

console.log(checkSubstringPlalindrome('anaana'))