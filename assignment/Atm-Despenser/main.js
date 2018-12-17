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

    let notes = [2000, 500, 200, 100, 50, 50, 20, 10, 5, 2, 1];

    console.log(notes);


    var amount = document.AtmForm.amount.value;
    if (amount == null || amount == "") {
        alert("Please enter vaild amount");
        return false;
    }

    notes.forEach(item => {
        let response = calculateMoneyDispenser(amount, item);
        amount = response.amount;
        totalNotes = totalNotes + response.rupees;
        document.getElementById("note-" + item).innerHTML = response.rupees;
    });
    document.getElementById("totalDispensed").innerHTML = totalNotes;
    return false;
}

/**
 * @description Calculate money dispenser
 * @returns {amount:1,rupees:100,totalNotes:1}
 */

function calculateMoneyDispenser(amount, rupees) {
    var rs = Math.floor(amount / rupees);
    amount = amount % rupees;
    return { "amount": amount, "rupees": rs };
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
            if ((this.value)) {
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