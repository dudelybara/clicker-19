//initial number of cookies    
var num = 0;

var cookie = document.getElementById("cookie");

window.onload = function () {
    var name = prompt("Enter username:");
    
    var space = document.getElementById("space");
    
    space.innerHTML = name + "'s Base";
}

function cookieClick() { 
    num += 1;

    var numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num;      
    //automatic upgrade to 2x
    if(num >= 30 ){
        num += 2;
        upgradeLevel.innerHTML = "Average Joe";
    }

    if(num >= 500) {
        num += 10;
        upgradeLevel.innerHTML = "Prepper";
    }

    if(num >= 1000) {
        num += 30;
        upgradeLevel.innerHTML = "Hoarder";
    }

    if(num >= 100000) {
        num += 1000;
        upgradeLevel.innerHTML = "SuperHoarder";
    }
}
