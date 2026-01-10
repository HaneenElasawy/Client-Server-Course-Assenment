var para = document.getElementById("PAR");

// font family
function ChangeFont(x) {
    para.style.fontFamily = x;
}

// text align
function ChangeAlign(y) {
    para.style.textAlign = y;
}

// line height
function ChangeHeight(h) {
    para.style.lineHeight = h;
}

// letter spacing
function ChangeLSpace(s) {
    para.style.letterSpacing = s;
}

// text indent
function ChangeIndent(i) {
    para.style.textIndent = i;
}

// text transform
function ChangeTransform(t) {
    para.style.textTransform = t;
}

// text decoration
function ChangeDecorate(d) {
    para.style.textDecoration = d;
}

// border style
function ChangeBorder(b) {
    if (b === "none") {
        para.style.border = "none";
    } else {
        para.style.border = "2px " + b + " black";
    }
}

// border color
function ChangeBorderColor(c) {
    para.style.borderColor = c;
}
