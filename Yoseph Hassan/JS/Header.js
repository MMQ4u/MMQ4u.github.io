var m = document.body.scrollTop;
    h_1 = document.getElementById("h_1");
window.onscroll = function() {h_1F()};
function h_1F() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        h_1.style.position = "fixed";
        h_1.style.top = "0";
        h_1.style.width = "100%";
    } else {
        h_1.style.position = "static";
    }
}
var h_1_2_2 = document.getElementById("h_1_2_2");
    h_1_2_2_0 = document.getElementById("h_1_2_2_0");
    h_1_2_2_1 = document.getElementById("h_1_2_2_1");
    h_1_2_2_2 = document.getElementById("h_1_2_2_2");
    h_1_2_2_3 = document.getElementById("h_1_2_2_3");
    h_1_2_2_4 = document.getElementById("h_1_2_2_4");
    h_1_2 = document.getElementById("h_1_2");
function h_1_2F() {
    // h_1_2_2
    h_1_2_2.style.display = "block";
    h_1_2_2.style.position = "absolute";
    h_1_2_2.style.backgroundColor = "rgba(226, 226, 226, 1)";
    // h_1_2_2 items
    h_1_2_2_0.style.display = "block";
    h_1_2_2_1.style.display = "block";
    h_1_2_2_2.style.display = "block";
    h_1_2_2_3.style.display = "block";
    h_1_2_2_4.style.display = "block";
}
function h_1_3F() {
    // h_1_2_2
    h_1_2_2.style.display = "none";
}