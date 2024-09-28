"use strict"
function findSmallest(arr){
    return Math.min(...arr);
}
console.log(findSmallest([30,45,60,7]));
//..................
function alph(str){
    return str.split("").sort().join("");
}
let result = alph ("Anas")
console.log(result);
//...........
function howwords(str){
    let words=  str.trim().split(/\s+/)
    return words.length;

}

let resulta = howwords ("welcome my profile")
console.log(resulta)
//.....................
function repet(str){
    return str.split("").map(char => char + char).join("");

}
let resultaa = repet(" Anas")
console.log(resultaa)
//.....................
