// Write the function camelize(str) which changes dash-separated words like "my-short-string" into camel-cased "myShortString"

function camelize(str){
    let placeholder = str.split("-");
    if (placeholder[0] == ''){
        placeholder.shift();
    }
    for(i = 0; i < placeholder.length; i++){
        placeholder[i] = placeholder[i].toLowerCase();
    }
    for(i = 0; i < placeholder.length; i++){
        if(i > 0){
            let newFirst = placeholder[i].slice(0,1).toUpperCase();
            let lowerCases = placeholder[i].slice(1);
            placeholder[i] = newFirst + lowerCases;
        }
    }
    return placeholder.join('');
}

console.log(camelize('this-string-please'));
console.log(camelize('-webkit-transition'));
console.log(camelize('AND-FINALLY-THIS'));