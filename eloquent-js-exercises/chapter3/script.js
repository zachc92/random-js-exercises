minimum = (a, b) => a > b ? console.log(a) : console.log(b);
minimum(10,5);

recursion = (num) => {
    if(num < 0){
        num = num * -1;
    }
    if(num == 0){
        console.log('Even');
    } else if (num%2 == 0){
        console.log('Even')
    } else if (num%2 != 0){
        console.log('Odd');
    }
};
recursion(-75);

countBs = (str) => {
    let beeCounter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == "B"){
            beeCounter++;
        }
    }
    console.log(beeCounter);
}
countBs('BooBee');

countChar = (str, char) => {
    let charCounter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == char){
            charCounter++;
        }
    }
    console.log(charCounter);
}
countChar('characters', 't')