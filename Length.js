function convert(){
    let cmVal = Number(document.getElementById("input").value);
    let inches = cmVal/2.54
    let result = document.getElementById("result");
    result.innerHTML = inches.toFixed(2) + "inches"
}