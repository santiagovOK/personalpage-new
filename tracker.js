function loadScript(callback) {
    var head = document.getElementsByTagName("head")[0],
        script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://tracker.metricool.com/resources/be.js";
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}

loadScript(function() {
    beTracker.t({ hash: "9e3c740bab30e397abd54e5a061451f9" });
});