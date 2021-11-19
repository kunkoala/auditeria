var indicator = 1;
slide(indicator);

function add(n){
    slide(indicator += n)
}

function min(n){slide(indicator -= 1)}


function slide(n){
    var i;
    for(i = 0; i < 6; i++){
        if(n )
        var d1 = "preview"+[indicator];
        var d2 = "preview"+[indicator+1];
        var d3 = "preview"+[indicator+2];
        document.getElementById(d1).style.display = "block";
        document.getElementById(d2).style.display = "block";
        document.getElementById(d3).style.display = "block";
    }
    
}