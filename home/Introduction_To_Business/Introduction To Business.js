window.onload = function () {
    var checkingCount = localStorage.getItem("count")
    if (checkingCount === "0") {
        window.location.href = `../../index.html`
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
    window.location.href = `../../index.html`
}

function result_page() {
    window.location.href = "../../result/result.html";
}

// var courseName = localStorage.getItem("coursename")
// var subject = localStorage.getItem("subject")
document.getElementsByClassName("heading")


var scoreList = [JSON.parse(localStorage.getItem("score"))[0], JSON.parse(localStorage.getItem("score"))[1], JSON.parse(localStorage.getItem("score"))[2]];
var count = 1;
score = 0;
score_match = "";
var selected_input_value = "";
var index_number = 0;
function input_selected() {
    selected_input_value = document.getElementsByName("options");
    for (i = 0; i < 4; i++) {
        if (selected_input_value[i].checked) {
            score_match = i;
            document.getElementsByClassName("next_btn")[0].removeAttribute("disabled")
        }
    }
}
function next_btn() {
    if (quiz_obj[index_number][count].question === quiz_obj[index_number].slice(-1)[0].question) {
        if (selected_input_value[score_match].value === quiz_obj[index_number][count - 1].answer) {
            score = score + 1;
        }
        document.getElementsByClassName("next_btn")[0].innerHTML = "Submit";
        document.getElementsByClassName("next_btn")[0].setAttribute("onclick", "result()")
    }
    document.getElementsByClassName("question_count")[0].innerHTML = `Question ${count + 1} of ${quiz_obj[index_number].length} :`;
    document.getElementsByClassName("question")[0].innerHTML = quiz_obj[index_number][count].question;
    document.getElementsByClassName("opt_div")[0].innerHTML = quiz_obj[index_number][count].opt1;
    document.getElementsByClassName("opt_div")[1].innerHTML = quiz_obj[index_number][count].opt2;
    document.getElementsByClassName("opt_div")[2].innerHTML = quiz_obj[index_number][count].opt3;
    document.getElementsByClassName("opt_div")[3].innerHTML = quiz_obj[index_number][count].opt4;
    document.getElementById(`opt1`).value = quiz_obj[index_number][count].opt1;
    document.getElementById(`opt2`).value = quiz_obj[index_number][count].opt2;
    document.getElementById(`opt3`).value = quiz_obj[index_number][count].opt3;
    document.getElementById(`opt4`).value = quiz_obj[index_number][count].opt4;
    document.getElementsByClassName("next_btn")[0].setAttribute("disabled", "")
    selected_input_value[4].setAttribute("checked", "")
    selected_input_value[4].removeAttribute("checked")
    selected_input_value = "";
    count = count + 1;
}

var screen_size = document.getElementsByClassName("hidden_box")[0];

function screen_change() {
    screen_size.requestFullscreen();
}

var original_screen_size = screen.availHeight;

function continueBtn(quiz_name, index) {
    document.getElementsByClassName("hidden_box")[0].style.display = "grid";
    screen_change();
    window.onblur = function () {
        window.location.href = "../home.html";
    }
    index_number = index;
    var timer_min = 119;
    var timer_sec = 60;
    setInterval(function () {
        if (localStorage.getItem("screen_size") === screen.availHeight) {
            window.location.href = "../home.html";
        }

        if (timer_min === 0 && timer_sec === 0) {
            localStorage.setItem("score", score);
            window.location.href = "../../result/result.html";
            timer_sec = timer_sec + 1;
        } else if (timer_sec === 0) {
            timer_sec = 60;
            timer_min = timer_min - 1;
        }
        timer_sec = timer_sec - 1;
        document.getElementsByClassName("timer")[0].innerHTML = timer_min + ":" + timer_sec;
    }, 1000)
    document.getElementsByTagName("body")[0].children[1].classList.add("hidden")
    document.getElementsByTagName("body")[0].children[2].classList.add("hidden")
    document.getElementsByTagName("body")[0].children[3].classList.remove("hidden")
    document.getElementsByClassName("quiz_start_box")[0].innerHTML = `
    <div class="quiz_header">
    <span class="header_span">
        <h1 class="quiz_heading">${quiz_name} Quiz</h1>
        <h4 class="question_count">Question ${count} of ${quiz_obj[index_number].length} :</h4>
        <h5 class="question">${quiz_obj[index_number][0].question}</h5>
    </span>
    <span class="timer"></span>
</div>
<div onchange="input_selected()" class="options_input">
    <label class="label_for_inputs" for="opt1">
        <input value="${quiz_obj[index_number][0].opt1}" type="radio" name="options" id="opt1">
        <p class="opt_div">${quiz_obj[index_number][0].opt1}</p>
    </label>
    <label class="label_for_inputs" for="opt2">
        <input value="${quiz_obj[index_number][0].opt2}" type="radio" name="options" id="opt2">
        <p class="opt_div">${quiz_obj[index_number][0].opt2}</p>
    </label>
    <label class="label_for_inputs" for="opt3">
        <input value="${quiz_obj[index_number][0].opt3}" type="radio" name="options" id="opt3">
        <p class="opt_div">${quiz_obj[index_number][0].opt3}</p>
    </label>
    <label class="label_for_inputs" for="opt4">
        <input value="${quiz_obj[index_number][0].opt4}" type="radio" name="options" id="opt4">
        <p class="opt_div">${quiz_obj[index_number][0].opt4}</p>
    </label>
</div>
<button disabled onclick="adding_score();next_btn()" class="next_btn">Next</button>
<input value="script" type="radio" class="hidden" name="options" id="opt5">
    `
}


