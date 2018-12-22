function add(a, b) {
    return a + b;
}
function calculate(a, b) {
    return add(a, b);
}
function main() {
    var result = calculate(10, 10);
    console.log(result);
}

// calling main function to start execution of program
main();