var current = "red";

function color_changer() {
    if (current === "red") {
        current = "blue"
    } else {
        current = "red";
    }
    document.getElementById("red_paragraph").style.color = current;
}