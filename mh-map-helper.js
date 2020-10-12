
window.onload=function() {
    // nothing yet so far
}

function createResults() {
var list = document.getElementById("result");
list.innerHTML = "<tr></tr>";
var textArea = document.getElementById("input");
var lines = textArea.value.split("\n");
var value;

for (var i = 0; i < lines.length; i++) {
    if (lines[i] != "") {
        value = miceValues.get(lines[i]);
        list.innerHTML += `<tr><td>${lines[i]}</td><td>${value}</td></tr>`;
    }

}
}