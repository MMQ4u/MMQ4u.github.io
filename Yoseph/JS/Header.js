window.onscroll = function() {h_1FS()};
function h_1FS() {
    if ((document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) && window.innerWidth > 1030) {
        document.getElementById("h_1").style.position = "fixed";
        document.getElementById("h_1").style.bottom = "auto";
        document.getElementById("h_1").style.top = "0";
        document.getElementById("h_1").style.backgroundColor = "rgba(255, 255, 255, 1)";
        document.getElementById("h_1").style.boxShadow = "0 3px 7px rgba(26, 30, 30, 0.3)";
        document.getElementById("h_1").style.width = "100%";
        document.getElementById("h_2").style.display = "block";
        document.getElementById("h_1_1").style.display = "none";
    } else if (window.innerWidth < 1125) {
        document.getElementById("h_1").style.position = "fixed";
        document.getElementById("h_1").style.bottom = "0";
        document.getElementById("h_1").style.top = "auto";
        document.getElementById("h_2").style.display = "none";
        document.getElementById("h_1_1").style.display = "block";
    } else {
        document.getElementById("h_1").style.position = "static";
        document.getElementById("h_1").style.boxShadow = "none";
        document.getElementById("h_2").style.display = "none";
        document.getElementById("h_1_1").style.display = "none";
    }
}