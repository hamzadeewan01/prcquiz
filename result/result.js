window.onload = function () {
    var checkingCount = localStorage.getItem("count");
    if (checkingCount === "0") {
        window.location.href = `../index.html`;
    } else if (checkingCount == null) {
        localStorage.setItem("count", "0")
        window.location.reload();
    }
}

document.getElementById("html_number").innerHTML = JSON.parse(localStorage.getItem("score"))[0] + " out of 10";
document.getElementById("css_number").innerHTML = JSON.parse(localStorage.getItem("score"))[1] + " out of 10";
document.getElementById("js_number").innerHTML = JSON.parse(localStorage.getItem("score"))[2] + " out of 10";
function logOut() {
    localStorage.setItem("count", "0");
    window.location.href = `../index.html`;
}

