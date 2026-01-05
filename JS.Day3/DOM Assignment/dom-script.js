window.onload = function () {
    var center = document.querySelector(".center");
    var header = document.getElementById("header");
    var navigation = document.getElementById("navigation");
    var img = header.querySelector("img");

    // remove any extra <ul> except the main menu (#nav)
    var allUls = center.querySelectorAll("ul");
    allUls.forEach(function (ul) {
        if (ul.id !== "nav") {
            ul.parentNode.removeChild(ul);
        }
    });

    // detach header + navigation from original place
    center.removeChild(header);
    center.removeChild(navigation);

    // ---------- top-right image ----------
    var topRight = document.createElement("div");
    topRight.style.textAlign = "right";
    topRight.appendChild(header);

    // ---------- middle: menu centered WITH bullets ----------
    var middleCenter = document.createElement("div");
    middleCenter.style.textAlign = "center";
    middleCenter.style.marginTop = "25px";

    // make menu inline-block so it can be centered with its bullets
    navigation.style.display = "inline-block";
    navigation.style.textAlign = "left";
    navigation.style.listStylePosition = "inside";
    navigation.style.paddingLeft = "0";

    middleCenter.appendChild(navigation);

    // ---------- bottom-left image ----------
    var bottomLeft = document.createElement("div");
    bottomLeft.style.textAlign = "left";
    bottomLeft.style.marginTop = "40px";

    var bottomImg = img.cloneNode(true);
    bottomLeft.appendChild(bottomImg);

    // ---------- bottom line ----------
    var hr = document.createElement("hr");
    hr.style.width = "80%";
    hr.style.marginTop = "10px";

    // append in order
    center.appendChild(topRight);
    center.appendChild(middleCenter);
    center.appendChild(bottomLeft);
    center.appendChild(hr);
};
