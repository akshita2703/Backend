function explainParseInt(value) {
    console.log("Value:", value);
    let res = parseInt(value);
    console.log("After parseInt:", res);
}
// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");


function explainParseFloat(value) {
    console.log("value", value);
    let res = parseFloat(value);
    console.log("After parseFloat:", res);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");