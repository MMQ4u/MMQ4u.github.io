var m = document.body.scrollTop;
    h_1 = document.getElementById("h_1");
window.onscroll = function() {h_1FS()};
function h_1FS() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        h_1.style.position = "fixed";
        h_1.style.top = "0";
        h_1.style.width = "100%";
    } else {
        h_1.style.position = "static";
    }
}
var h_1_2_0 = document.getElementById("h_1_2_0");
var h_1_2_0_C = h_1_2_0.getContext("2d");
h_1_2_0_C.fillStyle = "rgba(41, 201, 226, 1)";
h_1_2_0_C.fillRect(0, 0, 500, 33.3);
h_1_2_0_C.fillRect(0, 50, 500, 33.3);
h_1_2_0_C.fillRect(0, 100, 500, 33.3);
var h_1_2_2 = document.getElementById("h_1_2_2");
    h_1_2_2_0 = document.getElementById("h_1_2_2_0");
    h_1_2_2_1 = document.getElementById("h_1_2_2_1");
    h_1_2_2_2 = document.getElementById("h_1_2_2_2");
    h_1_2_2_3 = document.getElementById("h_1_2_2_3");
    h_1_2_2_4 = document.getElementById("h_1_2_2_4");
    h_1_2 = document.getElementById("h_1_2");
function h_1_2FC() {
    // h_1_2_2
    h_1_2_2.style.display = "block";
    h_1_2_2.style.position = "absolute";
    h_1_2_2.style.backgroundColor = "rgba(226, 226, 226, 1)";
}
function h_1_3FC() {
    // h_1_2_2
    h_1_2_2.style.display = "none";
}