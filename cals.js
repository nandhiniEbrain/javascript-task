

function calculation() {
    var f_No = document.getElementById("number1");
    var s_No = document.getElementById("number2");
    var result = document.getElementById("cals");
    result.innerHTML = "<p>The sum of two num is " + (Number(f_No.value) + Number(s_No.value)) + "</p>"
        + "<p>The subtraction of two num is " + (Number(f_No.value) - Number(s_No.value)) + "</p>"
        + "<p>The multiplication of two num is " + (Number(f_No.value) * Number(s_No.value)) + "</p>"
        + "<p>The divisin of two num is " + (Number(f_No.value) / Number(s_No.value)) + "</p>"
        + "<p>The square of two num is " + (Math.pow(Number(f_No.value), 2)) + "&nbsp;and&nbsp;" + (Math.pow(Number(s_No.value), 2)) + "</p>"
        + "<p>The  sin of two num is" + (Math.sin(Number(f_No.value))) + "&nbsp;and&nbsp;" + (Math.sin(Number(s_No.value))) + "</p>"
        + "<p>The  tan of two num is" + (Math.tan(Number(f_No.value))) + "&nbsp;and&nbsp;" + (Math.tan(Number(s_No.value))) + "</p>"
        + "<p>The  cos of two num is" + (Math.cos(Number(f_No.value))) + "&nbsp;and&nbsp;" + (Math.cos(Number(s_No.value))) + "</p>";

}





