//Initializing
var gridOne = 0;
var gridTwo = 0;
var gridThree = 0;
var gridFour = 0;
var gridFive = 0;
var gridSix = 0;

//Images Variable
var imgGridOne = [];
var imgGridTwo = [];
var imgGridThree = [];
var imgGridFour = [];
var imgGridFive = [];
var imgGridSix = [];



//time in millie seconds
var gridOneTime = 3000; // time in millie seconds
var gridTwoTime = 4000; // time in millie seconds
var gridThreeTime = 6000; // time in millie seconds
var gridFourTime = 6000; // time in millie seconds
var gridFiveTime = 4000; // time in millie seconds
var gridSixTime = 3000; // time in millie seconds

//imgGridOne
imgGridOne[0] = "url('./images/potrairt/01-justa.jpg')";
imgGridOne[1] = "url('./images/candid photography/DSC09458.jpg')";
imgGridOne[2] = "url('./images/potrairt/03-justa.jpg')";
imgGridOne[0] = "url('./images/candid photography/DSC09457.jpg')";
imgGridOne[1] = "url('./images/candid photography/DSC09326.jpg')";
imgGridOne[2] = "url('./images/candid photography/DSC09334.jpg')";

//imgGridTwo
imgGridTwo[0] = "url('./images/potrairt/02-justa.jpg')";
imgGridTwo[1] = "url('./images/event photography/8e3fc3d731479cc542a821cf1dc705f8.jpg')";
imgGridTwo[2] = "url('./images/event photography/17a2282222b86d5dfd6232c5b2b034fe.jpg')";
imgGridTwo[3] = "url('./images/candid photography/DSC09458.jpg')";
imgGridTwo[4] = "url('./images/potrairt/01-justa.jpg')";
imgGridTwo[5] = "url('./images/candid photography/DSC09334.jpg')";

//imgGridThree
imgGridThree[0] = "url('./images/candid photography/DSC09326.jpg')";
imgGridThree[1] = "url('./images/prewedding/DSC06018.jpg')";
imgGridThree[2] = "url('./images/prewedding/DSC06128.jpg')";
imgGridThree[3] = "url('./images/prewedding/candid photography/DSC09356.jpg')";
imgGridThree[4] = "url('./images/prewedding/DSC06092.jpg')";
imgGridThree[5] = "url('./images/prewedding/DSC06140.jpg')";

//imgGridFour
imgGridFour[0] = "url('./images/potrairt/04-justa.jpg')";
imgGridFour[1] = "url('./images/prewedding/DSC06091.jpg')";
imgGridFour[2] = "url('./images/prewedding/DSC06222.jpg')";
imgGridFour[3] = "url('./images/prewedding/DSC06020.jpg')"
imgGridFour[4] = "url('./images/event photography/8e3fc3d731479cc542a821cf1dc705f8.jpg')";
imgGridFour[5] = "url('./images/potrairt/01-justa.jpg')";

//imgGridFive
imgGridFive[0] = "url('./images/potrairt/01-justa.jpg')";
imgGridFive[1] = "url('./images/prewedding/DSC06092.jpg')";
imgGridFive[2] = "url('./images/potrairt/01-justa.jpg')";
imgGridFive[3] = "url('./images/prewedding/DSC06025.jpg')"
imgGridFive[4] = "url('./images/potrairt/01-justa.jpg')";
imgGridFive[5] = "url('./images/prewedding/DSC06091.jpg')"

//imgGridSix
imgGridSix[0] = "url('./images/prewedding/DSC06025.jpg')"
imgGridSix[1] = "url('./images/prewedding/DSC06091.jpg')"
imgGridSix[2] = "url('./images/potrairt/01-justa.jpg')";
imgGridSix[3] = "url('./images/prewedding/DSC06177.jpg')"
imgGridSix[4] = "url('./images/potrairt/01-justa.jpg')";
imgGridSix[5] = "url('./images/prewedding/DSC06092.jpg')";
//function

function changeGridOne() {
    var box1 = document.getElementById('box1');
    box1.style.backgroundImage = imgGridOne[gridOne];
    if (gridOne < imgGridOne.length - 1) {
        gridOne++;
    } else {
        gridOne = 0;
    }
    setTimeout('changeGridOne()', gridOneTime);
}

function changeGridTwo() {
    var box2 = document.getElementById('box2');
    box2.style.backgroundImage = imgGridTwo[gridTwo];
    if (gridTwo < imgGridTwo.length - 1) {
        gridTwo++;
    } else {
        gridTwo = 0;
    }
    setTimeout('changeGridTwo()', gridTwoTime);
}

function changeGridThree() {
    var box3 = document.getElementById('box3');
    box3.style.backgroundImage = imgGridThree[gridThree];
    if (gridThree < imgGridThree.length - 1) {
        gridThree++;
    } else
        gridThree = 0;
    setTimeout('changeGridThree()', gridThreeTime);
}

function changeGridFour() {
    var box4 = document.getElementById('box4');
    box4.style.backgroundImage = imgGridFour[gridFour];

    if (gridFour < imgGridFour.length - 1) {
        gridFour++;
    } else {
        gridFour = 0;
    }
    setTimeout('changeGridFour()', gridFourTime);
}

function changeGridFive() {
    var box5 = document.getElementById('box5');
    box5.style.backgroundImage = imgGridFive[gridFive];

    if (gridFive < imgGridFive.length - 1) {
        gridFive++;
    } else {
        gridFive = 0;
    }
    setTimeout('changeGridFive()', gridFiveTime);
}

function changeGridSix() {
    var box6 = document.getElementById('box6');
    box6.style.backgroundImage = imgGridSix[gridSix];
    if (gridSix < imgGridSix.length - 1) {
        gridSix++;
    } else {
        gridSix = 0;
    }
    setTimeout('changeGridSix()', gridSixTime);
}
changeGridOne();
changeGridTwo();
changeGridThree();
changeGridFour();
changeGridFive();
changeGridSix();
/* 
window.onload = changeGridOne;
window.onload = changeGridTwo;
window.onload = changeGridThree;
window.onload = changeGridFour;
window.onload = changeGridFive;
window.onload = changeGridSix; */