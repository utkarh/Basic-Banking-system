let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney() {
    var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);
    var account = document.getElementById("account").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);

    if (enterAmount > myAccountBalance) {
        alert("Insufficient Balance.")
    } else {
        var findUserBankAccount = account;
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
        document.getElementById("myAccountBalance").innerText = myAccountBalance
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        alert('Successful Transaction !!  ₹'+enterAmount+' is sent to ' +account);

        var createPTag = document.createElement("li");
        var textNode = document.createTextNode('₹'+enterAmount+' is sent to account number '+account+' on '+Date()+'.');
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}
