//All stringfunctionin javascript

// string- length, indexof() ,lastindexof() ,slice(),substirng(), replace(),split(), trim(),toUpperCase(),toLowerCase(), etc;

//length
function getlength(str) {
    console.log("string", str);
    console.log("Length:", str.length);

}
getlength("Akshita Rastogi");
//indexof
function findIndexof(str, target) {
    console.log("string", str);
    console.log("Index:", str.indexOf(target));

}
//lastIndex of
findIndexof("Akshita Rastogi", "shit") //hehe
function LastIndexof(str, target) {
    console.log("string", str);
    console.log("Index:", str.lastIndexOf(target));

}
LastIndexof("Akshita shit Rastogi", "shit") //hehe
    // slice - get substring 
function getSubstring(str, start, end) {
    console.log("string", str);
    console.log("Index:", str.slice(start, end));

}
getSubstring("Akshita Rastogi", 2, 6); //6thwill not be included
//substring
function getssubstring(str, start, end) {
    console.log("string", str);
    console.log("Index:", str.substring(start, end));

}
getssubstring("Akshita Rastogi", 2, 6); //6thwill not be included

// replace

function replaceString(str, target, replacement) {
    console.log("string", str);
    console.log("Index:", str.replace(target, replacement));

}
replaceString("Akshita Rastogi", "Akshita", "Kuku")

//split
function splitString(str, separator) {
    console.log("string", str);
    console.log("Index:", str.split(separator));

}
splitString("Akshita Rastogi", " ")
    //trim
function trimString(str) {
    console.log("string", str);
    console.log("Index:", str.trim());

}
trimString("   Akshita Rastogi ")

// toUpperCase
function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Akshita Rastogi");

// toLowerCase
function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Akshita Rastogi");

// string Akshita Rastogi
// Length: 15
// string Akshita Rastogi
// Index: 2
// string Akshita shit Rastogi
// Index: 8
// string Akshita Rastogi
// Index: shit
// string Akshita Rastogi
// Index: shit
// string Akshita Rastogi
// Index: Kuku Rastogi
// string Akshita Rastogi
// Index: ['Akshita', 'Rastogi']
// string Akshita Rastogi
// Index: Akshita Rastogi
// Original String: Akshita Rastogi
// After toUpperCase: AKSHITA RASTOGI
// Original String: Akshita Rastogi
// After toLowerCase: akshita rastogi