
let items = ["preview1", "preview2", "preview3", "preview4", "preview5"];

function slide() {
    var j = 0;
    for (j = 0; j < 5; j++) {
        document.getElementById(items[j]).style.display = "block";
        if (j > 2) {
            document.getElementById(items[j]).style.display = "none";
        }
    }
    rotate(items);
    
}

function slideBack() {
    for (j = 0; j < 5; j++) {
        document.getElementById(items[j]).style.display = "block";
        if (j > 2) {
            document.getElementById(items[j]).style.display = "none";
        }
    }
    rotateReverse(items);
}

function rotate(arr) {
    arr.push(arr.shift());
    return arr;
}

function rotateReverse(arr) {
    arr.unshift(arr.pop())
    return arr;
}


/* function slide(n){
    if (i % 5 == 0) {
        i = 0
    }
    var d1 = "preview"+[i];
    var d2 = "preview"+[i+1];
    var d3 = "preview"+[i+2];
    var d4 = "preview"+[i];
    var d5 = "preview"+[i+1];
    document.getElementById(d1).style.display = "block";
    document.getElementById(d2).style.display = "block";
    document.getElementById(d3).style.display = "block";
    document.getElementById(d4).style.display = "none";
    document.getElementById(d5).style.display = "none";
    indicator =+ i;
}*/