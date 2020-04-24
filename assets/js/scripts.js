//initial number of cookies    
var score = 0;

var cookie = document.getElementById("cookie");

var levels = [
    {
        title: "Average Joe",
        increment: 1,
        cookie_img: "https://media.giphy.com/media/YSkoyiXAkTS6hV7WsN/giphy.gif"
    },
    {
        title: "Hand washer",
        increment: 10,
        cookie_img: "https://media.giphy.com/media/iiQONm5DevaN7zCWLy/giphy.gif"
    },
    {
        title: "Home dweller",
        increment: 25,
        cookie_img: "https://media.giphy.com/media/kBfSVXHawPKHoq9NJ7/giphy.gif"
    },
    {
        title: "Sanitizer",
        increment: 100,
        cookie_img: "https://media.giphy.com/media/KfrUgKkK2mQ20Ws5lN/giphy.gif"
    },
    {
        title: "Home workout",
        increment: 250,
        cookie_img: "https://media.giphy.com/media/fsKLFpQLFJFBJbmhC9/giphy.gif"
    },
    {
        title: "Essential",
        increment: 5000,
        cookie_img: "https://media.giphy.com/media/mG2xydBOoOcG80l5GU/giphy.gif"
    },
];

var level = 0;

window.onload = function () {
    var name = prompt("Enter username:");
    
    var space = document.getElementById("space");
    
    space.innerHTML = name + "'s Base";
}

function cookieClick() { 
    score += levels[level].increment;

    var numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    if (score > 1000000) {
        level = 5;
    }
    else if (score > 5000) {
        level = 4;
    }
    else if (score > 1000) {
        level = 3;
    }
    else if (score > 500) {
        level = 2;
    }
    else if (score > 30) {
        level = 1;
    }

    numbers.innerHTML = score;      

    upgradeLevel.innerHTML = levels[level].title;
    document.getElementById("pic").src = levels[level].cookie_img;

}
