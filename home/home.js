window.onload = function () {
    var checkingCount = localStorage.getItem("count")
    if (checkingCount == "0") {
        window.location.href = `../index.html`
    } else if (checkingCount == null) {
        localStorage.setItem("count", "0")
        window.location.reload();
    }
    setTimeout(function () {
        document.getElementsByClassName("loader")[0].style.height = "auto"
        document.getElementsByTagName("body")[0].children[0].children[0].classList.add("hidden");
        document.getElementsByTagName("body")[0].children[1].classList.remove("hidden");
        document.getElementsByTagName("body")[0].children[2].classList.remove("hidden");
    }, 1000)
}
function logOut() {
    localStorage.setItem("count", "0")
    window.location.href = `../index.html`
}
function result_page() {
    window.location.href = "../result/result.html";
}
var name = localStorage.getItem("fname")
document.getElementsByClassName("heading")[0].innerHTML = `Welcome, ${name}.`

function joinQuiz(link, sub, name) {
    localStorage.setItem("course", link)
    localStorage.setItem("subject", sub)
    localStorage.setItem("coursename", name)
    window.location.href = `${link}/${link}.html`
}
