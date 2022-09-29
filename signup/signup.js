window.onload = function () {
    setTimeout(function () {
        document.getElementsByClassName("loader")[0].style.height = "auto"
        document.getElementsByTagName("body")[0].children[0].children[0].classList.add("hidden");
        document.getElementsByTagName("body")[0].children[1].classList.remove("hidden");
        document.getElementsByTagName("body")[0].children[2].classList.remove("hidden");
    }, 1000)
}

var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var pass_regex = /^(?=.*\d{1})(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[!@#$%^&*{|}?~_=+.-]{1})(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/;
function signUpBtn() {
    event.preventDefault();
    var fName = document.getElementById("fname_input").value;
    var lName = document.getElementById("lname_input").value;
    var email = document.getElementById("email_input").value;
    var password = document.getElementById("password_input").value;
    for (i = 1; i < 5; i++) {
        var inp_val = document.getElementsByClassName(`id${i}`)[0];
        if (inp_val.value === "") {
            inp_val.nextElementSibling.classList.remove("hidden")
        }
    }
    setTimeout(function () {
        for (i = 1; i < 5; i++) {
            var inp_val = document.getElementsByClassName(`id${i}`)[0];
            inp_val.nextElementSibling.classList.add("hidden")
        }
    }, 3000)
    if (!email_regex.test(email)) {
        document.getElementsByClassName("email_info")[0].children[2].classList.remove("hidden")
        setTimeout(function () {
            document.getElementsByClassName("email_info")[0].children[2].classList.add("hidden")
        }, 3000)
    }
    else if (!pass_regex.test(password)) {
        document.getElementsByClassName("password_info")[0].children[2].classList.remove("hidden")
        setTimeout(function () {
            document.getElementsByClassName("password_info")[0].children[2].classList.add("hidden")
        }, 3000)
    }
    else {
        localStorage.clear();
        localStorage.setItem("fname", fName)
        localStorage.setItem("lname", lName)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        localStorage.setItem("score", JSON.stringify([0,0,0]))
        window.location.replace("../login/login.html")
    }
}

function showPass() {
    var pass_type = document.getElementById("password_input").type
    if (pass_type === "password") {
        document.getElementById("password_input").type = "text"
    } else {
        document.getElementById("password_input").type = "password"
    }
}


function loginInts() {
        window.location.replace("../login/login.html")
}
