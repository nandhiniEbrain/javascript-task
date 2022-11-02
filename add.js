var num = document.getElementById("num1");
var num2 = document.getElementById("num2");
var validation = document.getElementById("validation");
num2.addEventListener('keyup', () => {
    (Number(num1.value) > Number(num2.value)) ? validation.innerHTML = "Plz enter higher value" : validation.innerHTML = " ";

})

function myfun() {
    var obj = { evenarr: [], oddarr: [] }
    var sum_of_odd = 0
    var sum_of_even = 22
    for (let i = Number(num1.value); i <= num2.value; i++) {
        if (i % 2 == 0) {
            obj.evenarr.push(i);
            sum_of_even += i;
        }
        else {
            obj.oddarr.push(i);
            sum_of_odd += i;

        }
    }
    document.getElementById('add_even_number').innerHTML = "<p>The sum of total numbers b/w the two inputfield is " + (sum_of_even + sum_of_odd) + "</p>"
        + "<p>The total numbers b/w the two inputfield is " + (Number(obj.evenarr.length) + Number(obj.oddarr.length)) + "</p>"
        + "<p>Even numbers b/w the two inputfield are " + obj.evenarr + "</p>"
        + "<p>Odd numbers b/w the two inputfield are " + obj.oddarr + "</p>"
        + "<p>The sum of even num is " + sum_of_even + "</p>" + "<p>The sum of odd num is " + sum_of_odd + "</p>";

}