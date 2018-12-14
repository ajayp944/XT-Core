/* 
 * @description Atm despenser
 * @author Ajay Pratap Singh <ajasing4@sapient.com>
 */

/**
 * global totalNotes : var
 */
var totalNotes = 0;


/**
 * @description Enter your amonut
 * @returns false : none
 */

function submitAmount() {
    totalNotes = 0;
    var amount = document.AtmForm.amount.value;
    if (amount == null || amount == "") {
        alert("Please enter vaild amount");
        return false;
    }

    if (amount > 2000) {
        var response = calculateMoneyDispenser(amount, 2000);
        amount = response.amount;
        document.getElementById("two-thousand").innerHTML = response.rupees;
    }
    if (amount > 500) {
        var response = calculateMoneyDispenser(amount, 500);
        amount = response.amount;
        document.getElementById("five-hundred").innerHTML = response.rupees;
    }

    if (amount > 200) {
        var response = calculateMoneyDispenser(amount, 200);
        amount = response.amount;
        document.getElementById("two-hundred-rs-note").innerHTML = response.rupees;
    }

    if (amount > 100) {
        var response = calculateMoneyDispenser(amount, 100);
        amount = response.amount;
        document.getElementById("hundred-rs-note").innerHTML = response.rupees;
    }

    if (amount > 50) {
        var response = calculateMoneyDispenser(amount, 50);
        amount = response.amount;
        document.getElementById("fifty-rs-note").innerHTML = response.rupees;
    }

    if (amount > 20) {
        var response = calculateMoneyDispenser(amount, 20);
        amount = response.amount;
        document.getElementById("twenty-rs-note").innerHTML = response.rupees;
    }

    if (amount > 10) {
        var response = calculateMoneyDispenser(amount, 10);
        amount = response.amount;
        document.getElementById("ten-rs-note").innerHTML = response.rupees;
    }

    if (amount > 5) {
        var response = calculateMoneyDispenser(amount, 5);
        amount = response.amount;
        document.getElementById("five-rs-note").innerHTML = response.rupees;
    }

    if (amount > 2) {
        var response = calculateMoneyDispenser(amount, 2);
        amount = response.amount;
        document.getElementById("two-rs-note").innerHTML = response.rupees;
    }

    if (amount == 1) {
        var response = calculateMoneyDispenser(amount, 1);
        amount = response.amount;
        document.getElementById("one-rs-note").innerHTML = response.rupees;
    }
    document.getElementById("totalDispensed").innerHTML = response.totalNotes;
    return false;
}

/**
 * @description Calculate money dispenser
 * @returns {amount:1,rupees:100,totalNotes:1}
 */

function calculateMoneyDispenser(amount, rupees) {
    var rs = Math.floor(amount / rupees);
    totalNotes = totalNotes + rs;
    amount = amount % rupees;
    return { "amount": amount, "rupees": rs, "totalNotes": totalNotes };
}


/**
 * @description validate input
 * @returns input value: ''
 */

setInputFilter(document.getElementById("amount"), function (value) {
    return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 40000);
});

function setInputFilter(textbox, inputFilter) {
    ["input", "keypress"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (x(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    });
}