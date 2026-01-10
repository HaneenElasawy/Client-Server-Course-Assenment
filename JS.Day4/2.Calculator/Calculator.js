var inp = document.querySelector("#Answer");

inp.addEventListener("keydown", function (e) {
    e.preventDefault();
});

inp.addEventListener("paste", function (e) {
    e.preventDefault();
});

function EnterNumber(num) {
    inp.value += num;
}

function EnterDot() {
    var v = inp.value;
    var lastNumber = v.split(/[\+\-\*\/]/).pop();
    if (lastNumber.indexOf(".") !== -1) return;
    if (v === "" || isOperator(v[v.length - 1])) inp.value += "0";
    inp.value += ".";
}

function EnterOperator(op) {
    if (inp.value === "") {
        if (op === "-") inp.value = "-";
        return;
    }

    var last = inp.value[inp.value.length - 1];

    if (isOperator(last)) {
        inp.value = inp.value.slice(0, -1) + op;
        return;
    }

    inp.value += op;
}

function EnterEqual() {
    if (inp.value === "") return;

    var expr = inp.value;

    if (!/^[0-9+\-*/.]+$/.test(expr)) {
        alert("Invalid Expression");
        return;
    }

    if (isOperator(expr[expr.length - 1]) || expr === "-") {
        alert("Invalid Expression");
        return;
    }

    try {
        var result = Function("return (" + expr + ")")();
        if (Number.isFinite(result)) {
            inp.value = result;
        } else {
            alert("Math Error");
            inp.value = "";
        }
    } catch {
        alert("Invalid Expression");
        inp.value = "";
    }
}

function EnterClear() {
    inp.value = "";
}

function isOperator(ch) {
    return ch === "+" || ch === "-" || ch === "*" || ch === "/";
}
