var open = 0;
function h_1_1_0FC() {
    open++;
    if (open == 1) {
        document.getElementById("h_1_1_1").style.display = "block";
    } else if (open == 2) {
        open = 0;
        document.getElementById("h_1_1_1").style.display = "none";
    }
    console.log(open);
}