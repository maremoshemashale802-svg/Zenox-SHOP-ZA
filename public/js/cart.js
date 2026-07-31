function confirmUID() {

    let uid = document.getElementById("uid").value;

    if (uid === "") {
        alert("Please enter your Free Fire UID.");
        return;
    }

    let answer = confirm("PLEASE CONFIRM UID\n\n" + uid);

    if (answer) {
        alert("UID confirmed. Continue to payment.");
        // Later we will open checkout.html
        // window.location.href = "checkout.html";
    } else {
        alert("Please enter the correct UID.");
        document.getElementById("uid").focus();
    }

}
