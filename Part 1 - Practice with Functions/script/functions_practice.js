//STEP 1

function halfNumber(x) {
    "use strict";
    if (isNaN(x)) {
        window.console.log("Invalid Number");
    } else {
        var res = x / 2;
        window.console.log("Half of " + String(x) + " is " + String(res) + ".");
        return res;
    }
}

halfNumber(15);
halfNumber(20);
halfNumber(27.5);



//STEP 2
function squareNumber(x) {
    "use strict";
    if (isNaN(x)) {
            window.console.log("Invalid Number");
    } else {
        var res = x * x;
        window.console.log("The result of squaring the number " + String(x) + " is " + String(res) + ".");
        return res;
    }
}

squareNumber(7);
squareNumber(9);
squareNumber(11);


//STEP 3
function percentOf(x, y) {
    "use strict";
    if ( (isNaN(x)) || (isNaN(y)) ) {
        window.console.log("Invalid Number");
    } else {
        var res = Math.round(x / y * 100);
        window.console.log(String(x) + " is " + String(res) + "% of " + String(y) + ".");
        return res;
    }
}

percentOf(20, 80);
percentOf(5, 35);
percentOf(40, 20);

//STEP 4
function findModulus(x, y) {
    "use strict";
    if ( (isNaN(x)) || (isNaN(y)) ) {
        window.console.log("Invalid Number");
    } else {
        var res = x % y;
        window.console.log(String(res) + " is the modulus of " + String(x) + " and " + String(y) + ".");
        return res;
    }
}

findModulus(23, 7);
findModulus(41, 3);
findModulus(3, 10);


//STEP 5
function sumNumbers() {
    "use strict";
    var sum = 0;
    var numberCollection = window.prompt("Enter numbers Seperated by commas");
    numberCollection = numberCollection.split(",");
    for (var i=0; i < numberCollection.length; i++) {
        sum += parseInt(numberCollection[i]);
    }

    window.console.log("Sum of the numbers in "+numberCollection + " is: " +String(sum));

    return sum;
}

sumNumbers();