// 0=starting point, 1=open star 2=closed star, 3=wall
// 4=rocket1, 5=rocket2, 6=rocket3, 7=rocket4, 8=rocket5, 9=rocket6, 10=rocket7, 11=asteroid 
var world = [
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,0,2,1,3,2,1,1,2,1,1,1,2,11,1,1,1,3,2,1,1,3],
    [3,1,3,1,3,1,3,3,3,3,1,1,3,3,3,3,1,3,1,3,1,3],
    [3,1,1,2,1,1,1,1,3,1,1,2,1,3,1,1,2,1,1,1,2,3],
    [3,3,3,1,3,1,3,1,3,1,3,3,1,3,1,3,1,3,1,3,3,3],
    [3,11,1,1,3,2,3,2,1,1,2,1,1,1,2,3,1,3,2,1,1,3],
    [3,1,3,2,3,1,3,1,3,3,3,3,3,3,1,3,11,3,1,3,1,3],
    [3,2,1,1,3,4,3,1,1,2,5,1,1,1,1,3,2,3,1,2,1,3],
    [3,3,3,3,3,11,3,1,3,1,3,3,1,3,1,3,1,3,3,3,3,3],
    [3,1,1,2,1,1,3,2,3,1,1,11,1,3,2,3,6,1,1,2,1,3],
    [3,2,3,3,3,3,3,1,3,1,3,3,1,3,1,3,3,3,3,3,1,3],
    [3,1,1,2,1,1,2,1,3,2,3,3,1,3,1,1,2,1,1,1,2,3],
    [3,1,3,3,3,3,3,1,3,1,1,1,2,3,2,3,3,3,3,3,1,3],
    [3,2,1,1,1,2,3,1,3,3,3,3,3,3,1,3,1,1,2,1,1,3],
    [3,3,3,3,3,1,3,1,7,11,1,1,1,1,1,3,2,3,3,3,3,3],
    [3,1,2,1,1,1,3,2,1,1,3,3,1,1,2,3,1,8,1,1,1,3],
    [3,1,3,1,3,2,3,1,3,1,1,2,1,3,1,3,1,3,11,3,2,3],
    [3,1,3,2,3,1,3,1,3,1,3,3,1,3,1,3,2,3,1,3,1,3],
    [3,9,3,1,3,1,3,1,3,2,3,3,1,3,10,3,1,3,2,3,1,3],
    [3,11,1,1,3,1,1,2,3,1,1,1,2,3,1,1,1,3,1,1,2,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
];
var score=0;
var rCat={
    x:1,
    y:1
};

function displayWorld(){
    var output='';
    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>\n";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 0)
                output += "<div class='starting-position'></div>";
            else if (world[i][j] == 1)
                output += "<div class='open-star'></div>";
            else if (world[i][j] == 2)
                output += "<div class='closed-star'></div>";
            else if (world[i][j] == 3)
                output += "<div class='wall'></div>";
            else if (world[i][j] == 4)
                output += "<div class='rocket-1'></div>";
            else if (world[i][j] == 5)
                output += "<div class='rocket-2'></div>";
            else if (world[i][j] == 6)
                output += "<div class='rocket-3'></div>";
            else if (world[i][j] == 7)
                output += "<div class='rocket-4'></div>";
            else if (world[i][j] == 8)
                output += "<div class='rocket-5'></div>";
            else if (world[i][j] == 9)
                output += "<div class='rocket-6'></div>";
            else if (world[i][j] == 10)
                output += "<div class='rocket-7'></div>";
            else if (world[i][j] == 11)
                output += "<div class='asteroid'></div>";
        }
        output += "\n</div>";
    }
    console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayRCat() {
    document.getElementById('rCat').style.top = rCat.y*20+"px";
    document.getElementById('rCat').style.left = rCat.x*20+"px";
}

function displayScore() {
    document.getElementById('score').innerHTML = score;
}

displayWorld();
displayRCat();
displayScore();