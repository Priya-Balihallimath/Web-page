function generateNumber() {
    let min=
    Number(document.getElementById("min") .value);
    let max=
    Number(document.getElementById("max").value);
    if(min>= max) {
        document.getElementById("result").innerHTML="Invalid range!";
    return;
    }
    let random =Math.floor(Math.random()*(max-min+1))+min;
document.getElementById("result").innerHTML=random;
}