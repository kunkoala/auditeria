function ham() {
    var x = document.getElementById("mobile");
    var y = document.getElementById("menu");
    if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    } else {
    x.style.display = "none";
    }
}


function back(){
    var x = document.getElementById("mobile");
    var y = document.getElementById("menu");
    if (x.style.display === "block"){
        x.style.display = "none";
        y.style.display = "grid";
    }else{
        x.style.display = "block";
    }
}