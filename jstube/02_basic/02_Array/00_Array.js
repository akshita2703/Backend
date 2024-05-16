//Array :push(),pop(),shift(),unshift(),splice(),slice(),concat(),forEach(),map(),filter(),reduce(),find(),sort().


//push()



function pushExample(arr, ele) {
    console.log("value Array:", arr);
    arr.push(ele);
    console.log("After push:", arr);

}
pushExample([1, 2, 3], 4);

//pop()

function popExample(arr) {
    console.log("value Array:", arr);
    arr.pop();
    console.log("After pop:", arr);

}
popExample([1, 2, 3]);


//shift

function shiftExample(arr) {
    console.log("value Array:", arr);
    arr.shift();
    console.log("After shift:", arr);

}
shiftExample([1, 2, 3]);

//Unshift()

function unshiftExample(arr, ele) {
    console.log("value Array:", arr);
    arr.unshift(ele);
    console.log("After unshift:", arr);

}
unshiftExample([1, 2, 3], 0);

//concat

function concatExample(arr, arr1) {
    console.log("value Array:", arr), arr1;
    let arr2 = arr.concat(arr1);
    console.log("After concat:", arr2);

}
concatExample([1, 2, 3], [4, 5, 6]);

//for each()


function forEachExample(arr) {
    console.log("value Array:", arr);
    arr.forEach(function(item, index) {
        console.log(item, index);
    });


}
forEachExample([1, 2, 3]);
//map()


function mapExample(arr) {
    console.log("value", arr);

    let newArr = arr.map(function(item) {
        return item * 2;
    });
    console.log("After map:", newArr);
}
mapExample([1, 2, 3]);


//filter()

function filterExample(arr) {
    console.log("value", arr);
    let newarr = arr.filter(function(item) {
        return item > 3;
    });
    console.log("After filter:", newarr);
}
filterExample([1, 2, 3, 4, 5]);

//find()

function findExample(arr) {
    console.log("value Array:", arr);
    let found = arr.find(function(item) {
        return item > 3;
    });
    console.log("After find:", found);

}
findExample([1, 2, 3, 4, 5]);
//sort()
function sortExample(arr) {
    console.log("value Array:", arr);
    arr.sort(function(a, b) {
        return a - b;
    });
    console.log("After sort:", arr);

}
sortExample([11, 2, 6, 9, 5]);