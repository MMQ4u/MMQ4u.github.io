var lm1 = [
        document.getElementById("s2_0_2_0_1_1_0_0"),
        document.getElementById("s2_0_2_0_1_1_1_0"),
        document.getElementById("s2_0_2_0_1_1_2_0"),
        document.getElementById("s2_0_2_0_1_1_3_0"),
        document.getElementById("s2_0_2_0_1_1_4_0"),
        document.getElementById("s2_0_2_0_1_1_5_0"),
        document.getElementById("s2_0_2_0_1_1_6_0"),
        document.getElementById("s2_0_2_0_1_1_7_0"),
        document.getElementById("s2_0_2_0_1_1_8_0"),
    ],
    lm2 = [
        document.getElementById("s2_0_2_0_1_1_0_1"),
        document.getElementById("s2_0_2_0_1_1_1_1"),
        document.getElementById("s2_0_2_0_1_1_2_1"),
        document.getElementById("s2_0_2_0_1_1_3_1"),
        document.getElementById("s2_0_2_0_1_1_4_1"),
        document.getElementById("s2_0_2_0_1_1_5_1"),
        document.getElementById("s2_0_2_0_1_1_6_1"),
        document.getElementById("s2_0_2_0_1_1_7_1"),
        document.getElementById("s2_0_2_0_1_1_8_1"),
    ],
    lm3 = [
        document.getElementById("s2_0_2_0_1_1_0_2"),
        document.getElementById("s2_0_2_0_1_1_1_2"),
        document.getElementById("s2_0_2_0_1_1_2_2"),
        document.getElementById("s2_0_2_0_1_1_3_2"),
        document.getElementById("s2_0_2_0_1_1_4_2"),
        document.getElementById("s2_0_2_0_1_1_5_2"),
        document.getElementById("s2_0_2_0_1_1_6_2"),
        document.getElementById("s2_0_2_0_1_1_7_2"),
        document.getElementById("s2_0_2_0_1_1_8_2"),
    ],
    lm4 = [
        document.getElementById("s2_0_2_0_1_1_0_3"),
        document.getElementById("s2_0_2_0_1_1_1_3"),
        document.getElementById("s2_0_2_0_1_1_2_3"),
        document.getElementById("s2_0_2_0_1_1_3_3"),
        document.getElementById("s2_0_2_0_1_1_4_3"),
        document.getElementById("s2_0_2_0_1_1_5_3"),
        document.getElementById("s2_0_2_0_1_1_6_3"),
        document.getElementById("s2_0_2_0_1_1_7_3"),
        document.getElementById("s2_0_2_0_1_1_8_3"),
    ],
    lm5 = [
        document.getElementById("s2_0_2_0_1_1_0_4"),
        document.getElementById("s2_0_2_0_1_1_1_4"),
        document.getElementById("s2_0_2_0_1_1_2_4"),
        document.getElementById("s2_0_2_0_1_1_3_4"),
        document.getElementById("s2_0_2_0_1_1_4_4"),
        document.getElementById("s2_0_2_0_1_1_5_4"),
        document.getElementById("s2_0_2_0_1_1_6_4"),
        document.getElementById("s2_0_2_0_1_1_7_4"),
        document.getElementById("s2_0_2_0_1_1_8_4"),
    ],
    lm6 = [
        document.getElementById("s2_0_2_0_1_1_0_5"),
        document.getElementById("s2_0_2_0_1_1_1_5"),
        document.getElementById("s2_0_2_0_1_1_2_5"),
        document.getElementById("s2_0_2_0_1_1_3_5"),
        document.getElementById("s2_0_2_0_1_1_4_5"),
        document.getElementById("s2_0_2_0_1_1_5_5"),
        document.getElementById("s2_0_2_0_1_1_6_5"),
        document.getElementById("s2_0_2_0_1_1_7_5"),
        document.getElementById("s2_0_2_0_1_1_8_5"),
    ],
    qm1 = [
        document.getElementById("s2_0_2_0_1_1_9_0"),
    ],
    lmd = [
        document.getElementById("s2_0_2_0_1_1_1_5"),
        document.getElementById("s2_0_2_0_1_1_2_3"),
        document.getElementById("s2_0_2_0_1_1_2_4"),
        document.getElementById("s2_0_2_0_1_1_2_5"),
        document.getElementById("s2_0_2_0_1_1_3_4"),
        document.getElementById("s2_0_2_0_1_1_3_5"),
        document.getElementById("s2_0_2_0_1_1_4_4"),
        document.getElementById("s2_0_2_0_1_1_4_5"),
        document.getElementById("s2_0_2_0_1_1_5_1"),
        document.getElementById("s2_0_2_0_1_1_5_2"),
        document.getElementById("s2_0_2_0_1_1_5_3"),
        document.getElementById("s2_0_2_0_1_1_5_4"),
        document.getElementById("s2_0_2_0_1_1_5_5"),
        document.getElementById("s2_0_2_0_1_1_6_4"),
        document.getElementById("s2_0_2_0_1_1_6_5"),
        document.getElementById("s2_0_2_0_1_1_7_2"),
        document.getElementById("s2_0_2_0_1_1_7_3"),
        document.getElementById("s2_0_2_0_1_1_7_4"),
        document.getElementById("s2_0_2_0_1_1_7_5"),
        document.getElementById("s2_0_2_0_1_1_8_1"),
        document.getElementById("s2_0_2_0_1_1_8_2"),
        document.getElementById("s2_0_2_0_1_1_8_3"),
        document.getElementById("s2_0_2_0_1_1_8_4"),
        document.getElementById("s2_0_2_0_1_1_8_5"),
    ],
    fillm = 0;
var lf1 = [
        document.getElementById("s2_0_2_0_2_1_0_0"),
        document.getElementById("s2_0_2_0_2_1_1_0"),
        document.getElementById("s2_0_2_0_2_1_2_0"),
        document.getElementById("s2_0_2_0_2_1_3_0"),
        document.getElementById("s2_0_2_0_2_1_4_0"),
        document.getElementById("s2_0_2_0_2_1_5_0"),
        document.getElementById("s2_0_2_0_2_1_6_0"),
        document.getElementById("s2_0_2_0_2_1_7_0"),
        document.getElementById("s2_0_2_0_2_1_8_0"),
    ],
    lf2 = [
        document.getElementById("s2_0_2_0_2_1_0_1"),
        document.getElementById("s2_0_2_0_2_1_1_1"),
        document.getElementById("s2_0_2_0_2_1_2_1"),
        document.getElementById("s2_0_2_0_2_1_3_1"),
        document.getElementById("s2_0_2_0_2_1_4_1"),
        document.getElementById("s2_0_2_0_2_1_5_1"),
        document.getElementById("s2_0_2_0_2_1_6_1"),
        document.getElementById("s2_0_2_0_2_1_7_1"),
        document.getElementById("s2_0_2_0_2_1_8_1"),
    ],
    lf3 = [
        document.getElementById("s2_0_2_0_2_1_0_2"),
        document.getElementById("s2_0_2_0_2_1_1_2"),
        document.getElementById("s2_0_2_0_2_1_2_2"),
        document.getElementById("s2_0_2_0_2_1_3_2"),
        document.getElementById("s2_0_2_0_2_1_4_2"),
        document.getElementById("s2_0_2_0_2_1_5_2"),
        document.getElementById("s2_0_2_0_2_1_6_2"),
        document.getElementById("s2_0_2_0_2_1_7_2"),
        document.getElementById("s2_0_2_0_2_1_8_2"),
    ],
    lf4 = [
        document.getElementById("s2_0_2_0_2_1_0_3"),
        document.getElementById("s2_0_2_0_2_1_1_3"),
        document.getElementById("s2_0_2_0_2_1_2_3"),
        document.getElementById("s2_0_2_0_2_1_3_3"),
        document.getElementById("s2_0_2_0_2_1_4_3"),
        document.getElementById("s2_0_2_0_2_1_5_3"),
        document.getElementById("s2_0_2_0_2_1_6_3"),
        document.getElementById("s2_0_2_0_2_1_7_3"),
        document.getElementById("s2_0_2_0_2_1_8_3"),
    ],
    lf5 = [
        document.getElementById("s2_0_2_0_2_1_0_4"),
        document.getElementById("s2_0_2_0_2_1_1_4"),
        document.getElementById("s2_0_2_0_2_1_2_4"),
        document.getElementById("s2_0_2_0_2_1_3_4"),
        document.getElementById("s2_0_2_0_2_1_4_4"),
        document.getElementById("s2_0_2_0_2_1_5_4"),
        document.getElementById("s2_0_2_0_2_1_6_4"),
        document.getElementById("s2_0_2_0_2_1_7_4"),
        document.getElementById("s2_0_2_0_2_1_8_4"),
    ],
    lf6 = [
        document.getElementById("s2_0_2_0_2_1_0_5"),
        document.getElementById("s2_0_2_0_2_1_1_5"),
        document.getElementById("s2_0_2_0_2_1_2_5"),
        document.getElementById("s2_0_2_0_2_1_3_5"),
        document.getElementById("s2_0_2_0_2_1_4_5"),
        document.getElementById("s2_0_2_0_2_1_5_5"),
        document.getElementById("s2_0_2_0_2_1_6_5"),
        document.getElementById("s2_0_2_0_2_1_7_5"),
        document.getElementById("s2_0_2_0_2_1_8_5"),
    ],
    qf1 = [
        document.getElementById("s2_0_2_0_2_1_9_0"),
    ],
    lfd = [
        document.getElementById("s2_0_2_0_2_1_5_0"),
        document.getElementById("s2_0_2_0_2_1_5_1"),
        document.getElementById("s2_0_2_0_2_1_5_2"),
        document.getElementById("s2_0_2_0_2_1_5_5"),
        document.getElementById("s2_0_2_0_2_1_8_2"),
        document.getElementById("s2_0_2_0_2_1_8_3"),
        document.getElementById("s2_0_2_0_2_1_8_4"),
        document.getElementById("s2_0_2_0_2_1_8_5"),
    ],
    fillf = 0;
function s2_0_2_1_3FC() {
    var lim;
    fillm++;
    if (fillm == 1) {
        for (lim = 0; lim <= lm1.length - 1; lim++) {
            lm1[lim].value = 100;
        }
        for (lim = 0; lim <= lm2.length - 1; lim++) {
            lm2[lim].value = 100;
        }
        for (lim = 0; lim <= lm3.length - 1; lim++) {
            lm3[lim].value = 100;
        }
        for (lim = 0; lim <= lm4.length - 1; lim++) {
            lm4[lim].value = 100;
        }
        for (lim = 0; lim <= lm5.length - 1; lim++) {
            lm5[lim].value = 100;
        }
        for (lim = 0; lim <= lm6.length - 1; lim++) {
            lm6[lim].value = 100;
        }
        for (lim = 0; lim <= qm1.length - 1; lim++) {
            qm1[lim].value = 100;
        }
        for (lim = 0; lim <= lmd.length -1; lim++) {
            lmd[lim].value = "";
        }
    } else if (fillm == 2) {
        fillm = 0;
        for (lim = 0; lim <= lm1.length - 1; lim++) {
            lm1[lim].value = "";
        }
        for (lim = 0; lim <= lm2.length - 1; lim++) {
            lm2[lim].value = "";
        }
        for (lim = 0; lim <= lm3.length - 1; lim++) {
            lm3[lim].value = "";
        }
        for (lim = 0; lim <= lm4.length - 1; lim++) {
            lm4[lim].value = "";
        }
        for (lim = 0; lim <= lm5.length - 1; lim++) {
            lm5[lim].value = "";
        }
        for (lim = 0; lim <= lm6.length - 1; lim++) {
            lm6[lim].value = "";
        }
        for (lim = 0; lim <= qm1.length - 1; lim++) {
            qm1[lim].value = "";
        }
    }
}
function s2_0_2_1_4FC() {
    var lif;
    fillf++;
    if (fillf == 1) {
        for (lif = 0; lif <= lf1.length - 1; lif++) {
            lf1[lif].value = 100;
        }
        for (lif = 0; lif <= lf2.length - 1; lif++) {
            lf2[lif].value = 100;
        }
        for (lif = 0; lif <= lf3.length - 1; lif++) {
            lf3[lif].value = 100;
        }
        for (lif = 0; lif <= lf4.length - 1; lif++) {
            lf4[lif].value = 100;
        }
        for (lif = 0; lif <= lf5.length - 1; lif++) {
            lf5[lif].value = 100;
        }
        for (lif = 0; lif <= lf6.length - 1; lif++) {
            lf6[lif].value = 100;
        }
        for (lif = 0; lif <= qf1.length - 1; lif++) {
            qf1[lif].value = 100;
        }
        for (lif = 0; lif <= lfd.length -1; lif++) {
            lfd[lif].value = "";
        }
    } else if (fillf == 2) {
        fillf = 0;
        for (lif = 0; lif <= lf1.length - 1; lif++) {
            lf1[lif].value = "";
        }
        for (lif = 0; lif <= lf2.length - 1; lif++) {
            lf2[lif].value = "";
        }
        for (lif = 0; lif <= lf3.length - 1; lif++) {
            lf3[lif].value = "";
        }
        for (lif = 0; lif <= lf4.length - 1; lif++) {
            lf4[lif].value = "";
        }
        for (lif = 0; lif <= lf5.length - 1; lif++) {
            lf5[lif].value = "";
        }
        for (lif = 0; lif <= lf6.length - 1; lif++) {
            lf6[lif].value = "";
        }
        for (lif = 0; lif <= qf1.length - 1; lif++) {
            qf1[lif].value = "";
        }
    }
}
function s2_0_1_0_0_0FC() {
    document.getElementById("s2_0_2_0_1").style.display = "flex";
    document.getElementById("s2_0_2_0_2").style.display = "none";
    document.getElementById("s2_0_1_0_0_0").style.backgroundColor = "rgba(42, 213, 239, 1)";
    document.getElementById("s2_0_1_0_0_0").style.color = "rgba(255, 255, 255, 1)";
    document.getElementById("s2_0_1_0_0_1").style.backgroundColor = "rgba(235, 235, 235, 1)";
    document.getElementById("s2_0_1_0_0_1").style.color = "rgba(83, 92, 93, 1)";
    document.getElementById("s2_0_2_1_0").style.display = "block";
    document.getElementById("s2_0_2_1_1").style.display = "none";
    document.getElementById("s2_0_2_1_2").style.display = "none";
    document.getElementById("s2_0_2_1_3").style.display = "block";
    document.getElementById("s2_0_2_1_4").style.display = "none";
    document.getElementById("s2_0_1_0_1").style.display = "flex";
    document.getElementById("s2_0_1_0_2").style.display = "none";
}
function s2_0_1_0_0_1FC() {
    document.getElementById("s2_0_2_0_1").style.display = "none";
    document.getElementById("s2_0_2_0_2").style.display = "flex";
    document.getElementById("s2_0_1_0_0_0").style.backgroundColor = "rgba(235, 235, 235, 1)";
    document.getElementById("s2_0_1_0_0_0").style.color = "rgba(83, 92, 93, 1)";
    document.getElementById("s2_0_1_0_0_1").style.backgroundColor = "rgba(42, 213, 239, 1)";
    document.getElementById("s2_0_1_0_0_1").style.color = "rgba(255, 255, 255, 1)";
    document.getElementById("s2_0_2_1_0").style.display = "none";
    document.getElementById("s2_0_2_1_1").style.display = "block";
    document.getElementById("s2_0_2_1_2").style.display = "none";
    document.getElementById("s2_0_2_1_3").style.display = "none";
    document.getElementById("s2_0_2_1_4").style.display = "block";
    document.getElementById("s2_0_1_0_1").style.display = "none";
    document.getElementById("s2_0_1_0_2").style.display = "flex";
}
function s2_0_1_0_1_0FC() {
    document.getElementById("s2_0_1_0_1_0").style.backgroundColor = "rgba(42, 213, 239, 1)";
    document.getElementById("s2_0_1_0_1_0").style.color = "rgba(255, 255, 255, 1)";
    document.getElementById("s2_0_1_0_1_1").style.backgroundColor = "rgba(235, 235, 235, 1)";
    document.getElementById("s2_0_1_0_1_1").style.color = "rgba(83, 92, 93, 1)";
}
function s2_0_1_0_1_1FC() {
    document.getElementById("s2_0_1_0_1_0").style.backgroundColor = "rgba(235, 235, 235, 1)";
    document.getElementById("s2_0_1_0_1_0").style.color = "rgba(83, 92, 93, 1)";
    document.getElementById("s2_0_1_0_1_1").style.backgroundColor = "rgba(42, 213, 239, 1)";
    document.getElementById("s2_0_1_0_1_1").style.color = "rgba(255, 255, 255, 1)";
}
function s2_0_1_0_2_0FC() {
    document.getElementById("s2_0_1_0_2_0").style.backgroundColor = "rgba(42, 213, 239, 1)";
    document.getElementById("s2_0_1_0_2_0").style.color = "rgba(255, 255, 255, 1)";
    document.getElementById("s2_0_1_0_2_1").style.backgroundColor = "rgba(235, 235, 235, 1)";
    document.getElementById("s2_0_1_0_2_1").style.color = "rgba(83, 92, 93, 1)";
    lfd.pop();
    lfd.pop();
    document.getElementById("s2_0_2_0_2_1_5_3").disabled = false;
    document.getElementById("s2_0_2_0_2_1_5_4").disabled = false;
    document.getElementById("s2_0_2_0_2_1_5_3").placeholder = "الدرجة";
    document.getElementById("s2_0_2_0_2_1_5_4").placeholder = "الدرجة";
    document.getElementById("s2_0_2_1_1").style.display = "block";
    document.getElementById("s2_0_2_1_2").style.display = "none";
}
function s2_0_1_0_2_1FC() {
    document.getElementById("s2_0_1_0_2_0").style.backgroundColor = "rgba(235, 235, 235, 1)";
    document.getElementById("s2_0_1_0_2_0").style.color = "rgba(83, 92, 93, 1)";
    document.getElementById("s2_0_1_0_2_1").style.backgroundColor = "rgba(42, 213, 239, 1)";
    document.getElementById("s2_0_1_0_2_1").style.color = "rgba(255, 255, 255, 1)";
    lfd.splice(lfd.length, 0, document.getElementById("s2_0_2_0_2_1_5_3"), document.getElementById("s2_0_2_0_2_1_5_4"));
    document.getElementById("s2_0_2_0_2_1_5_3").disabled = true;
    document.getElementById("s2_0_2_0_2_1_5_4").disabled = true;
    document.getElementById("s2_0_2_0_2_1_5_3").placeholder = "";
    document.getElementById("s2_0_2_0_2_1_5_4").placeholder = "";
    document.getElementById("s2_0_2_0_2_1_5_3").value = "";
    document.getElementById("s2_0_2_0_2_1_5_4").value = "";
    document.getElementById("s2_0_2_1_1").style.display = "none";
    document.getElementById("s2_0_2_1_2").style.display = "block";
}
function boyf() {
    l1_PB = (Number(lf1[0].value) * 5) + (Number(lf1[1].value) * 4) + (Number(lf1[2].value) * 2) + (Number(lf1[3].value) * 2) + (Number(lf1[4].value) * 2) + (Number(lf1[6].value) * 6) + (Number(lf1[7].value) * 2) + (Number(lf1[8].value) * 3);
    l1_NB = (l1_PB / 2600) * 100;
    l2_PB = (Number(lf2[0].value) * 5) + (Number(lf2[1].value) * 4) + (Number(lf2[2].value) * 2) + (Number(lf2[3].value) * 2) + (Number(lf2[4].value) * 2) + (Number(lf2[6].value) * 6) + (Number(lf2[7].value) * 2) + (Number(lf2[8].value) * 3);
    l2_NB = (l2_PB / 2600) * 100;
    l12_PB = (l1_NB + l2_NB) / 2;
    l12_NB = l12_PB * (25 / 100);
    l3_PB = (Number(lf3[0].value) * 6) + (Number(lf3[1].value) * 4) + (Number(lf3[2].value) * 4) + (Number(lf3[3].value) * 4) + (Number(lf3[4].value) * 4) + (Number(lf3[6].value) * 3) + (Number(lf3[7].value) * 2);
    l3_NB = (l3_PB / 2700) * 100;
    l4_PB = (Number(lf4[0].value) * 6) + (Number(lf4[1].value) * 4) + (Number(lf4[2].value) * 4) + (Number(lf4[3].value) * 4) + (Number(lf4[4].value) * 4) + (Number(lf4[5].value) * 2) + (Number(lf4[6].value) * 3) + (Number(lf4[7].value) * 2);
    l4_NB = (l4_PB / 2900) * 100;
    l34_PB = (l3_NB + l4_NB) / 2;
    l34_NB = l34_PB * (35 / 100);
    l5_PB = (Number(lf5[0].value) * 6) + (Number(lf5[1].value) * 4) + (Number(lf5[2].value) * 4) + (Number(lf5[3].value) * 4) + (Number(lf5[4].value) * 4) + (Number(lf5[5].value) * 2) + (Number(lf5[6].value) * 3) + (Number(lf5[7].value) * 2);
    l5_NB = (l5_PB / 2900) * 100;
    l6_PB = (Number(lf6[0].value) * 6) + (Number(lf6[1].value) * 4) + (Number(lf6[2].value) * 4) + (Number(lf6[3].value) * 4) + (Number(lf6[4].value) * 4) + (Number(lf6[6].value) * 3) + (Number(lf6[7].value) * 2);
    l6_NB = (l6_PB / 2700) * 100;
    l56_PB = (l5_NB + l6_NB) / 2;
    l56_NB = l56_PB * (40 / 100);
    l123456_PB = l12_NB + l34_NB + l56_NB;
    l123456_NB = l123456_PB / 2;
    q_PB = (Number(qf1[0].value));
    q_NB = q_PB / 2;
    t_PB = l123456_NB + q_NB;
    t_NB = t_PB * 4.1;
}
function girlf() {
    l1_PB = (Number(lf1[0].value) * 5) + (Number(lf1[1].value) * 4) + (Number(lf1[2].value) * 2) + (Number(lf1[3].value) * 2) + (Number(lf1[4].value) * 2) + (Number(lf1[6].value) * 6) + (Number(lf1[7].value) * 2) + (Number(lf1[8].value) * 3);
    l1_NB = (l1_PB / 2600) * 100;
    l2_PB = (Number(lf2[0].value) * 5) + (Number(lf2[1].value) * 4) + (Number(lf2[2].value) * 2) + (Number(lf2[3].value) * 2) + (Number(lf2[4].value) * 2) + (Number(lf2[6].value) * 6) + (Number(lf2[7].value) * 2) + (Number(lf2[8].value) * 3);
    l2_NB = (l2_PB / 2600) * 100;
    l12_PB = (l1_NB + l2_NB) / 2;
    l12_NB = l12_PB * (25 / 100);
    l3_PB = (Number(lf3[0].value) * 6) + (Number(lf3[1].value) * 4) + (Number(lf3[2].value) * 4) + (Number(lf3[3].value) * 4) + (Number(lf3[4].value) * 4) + (Number(lf3[6].value) * 3) + (Number(lf3[7].value) * 2);
    l3_NB = (l3_PB / 2700) * 100;
    l4_PB = (Number(lf4[0].value) * 6) + (Number(lf4[1].value) * 4) + (Number(lf4[2].value) * 4) + (Number(lf4[3].value) * 4) + (Number(lf4[4].value) * 4) + (Number(lf4[6].value) * 3) + (Number(lf4[7].value) * 2);
    l4_NB = (l4_PB / 2700) * 100;
    l34_PB = (l3_NB + l4_NB) / 2;
    l34_NB = l34_PB * (35 / 100);
    l5_PB = (Number(lf5[0].value) * 6) + (Number(lf5[1].value) * 4) + (Number(lf5[2].value) * 4) + (Number(lf5[3].value) * 4) + (Number(lf5[4].value) * 4) + (Number(lf5[6].value) * 3) + (Number(lf5[7].value) * 2);
    l5_NB = (l5_PB / 2700) * 100;
    l6_PB = (Number(lf6[0].value) * 6) + (Number(lf6[1].value) * 4) + (Number(lf6[2].value) * 4) + (Number(lf6[3].value) * 4) + (Number(lf6[4].value) * 4) + (Number(lf6[6].value) * 3) + (Number(lf6[7].value) * 2);
    l6_NB = (l6_PB / 2700) * 100;
    l56_PB = (l5_NB + l6_NB) / 2;
    l56_NB = l56_PB * (40 / 100);
    l123456_PB = l12_NB + l34_NB + l56_NB;
    l123456_NB = l123456_PB / 2;
    q_PB = (Number(qf1[0].value));
    q_NB = q_PB / 2;
    t_PB = l123456_NB + q_NB;
    t_NB = t_PB * 4.1;
}
function boygirlm() {
    l1_PB = Number(lm1[0].value) + Number(lm1[1].value) + Number(lm1[2].value) + Number(lm1[3].value) + Number(lm1[4].value) + Number(lm1[5].value) + Number(lm1[6].value) + Number(lm1[7].value) + Number(lm1[8].value);
    l1_NB = (l1_PB / 9);
    l2_PB = Number(lm2[0].value) + Number(lm2[1].value) + Number(lm2[2].value) + Number(lm2[3].value) + Number(lm2[4].value) + Number(lm2[5].value) + Number(lm2[6].value);
    l2_NB = (l2_PB / 7);
    l12_PB = l1_NB + l2_NB;
    l12_NB = l12_PB;
    l3_PB = Number(lm3[0].value) + Number(lm3[1].value) + Number(lm3[2].value) + Number(lm3[3].value) + Number(lm3[4].value) + Number(lm3[5].value);
    l3_NB = (l3_PB / 6);
    l4_PB = Number(lm4[0].value) + Number(lm4[1].value) + Number(lm4[2].value) + Number(lm4[3].value) + Number(lm4[4].value);
    l4_NB = (l4_PB / 5);
    l34_PB = l3_NB + l4_NB;
    l34_NB = l34_PB;
    l5_PB = Number(lm5[0].value) + Number(lm5[1].value);
    l5_NB = (l5_PB / 2);
    l6_PB = Number(lm6[0].value);
    l6_NB = (l6_PB / 1);
    l56_PB = l5_NB + l6_NB;
    l56_NB = l56_PB;
    l123456_PB = (l12_NB + l34_NB + l56_NB) / 1200;
    l123456_NB = l123456_PB * 100;
    q_PB = (Number(qm1[0].value));
    q_NB = q_PB / 2;
    t_PB = l123456_NB + q_NB;
    t_NB = t_PB * 4.1;
}
function s2_0_2_1_0FC() {
    boygirlm();
    if (isNaN(t_NB) == true) {
        t_NB = 0;
    } else {
        document.getElementById("s2_0_2_2_1_1").innerHTML = t_NB.toFixed(6);
    }
}
function s2_0_2_1_1FC() {
    boyf();
    document.getElementById("s2_0_2_2_1_1").innerHTML = t_NB.toFixed(6);
}
function s2_0_2_1_2FC() {
    girlf();
    document.getElementById("s2_0_2_2_1_1").innerHTML = t_NB.toFixed(6);
}
var i;
var marks = document.getElementsByClassName("marks");
function marksFK(i) {
    if (marks[i].value > 100) {
        marks[i].value = "";
    } else if (isNaN(marks[i].value) == true) {
        marks[i].value = "";
    }
}
