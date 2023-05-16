var ball = document.getElementById('ball');
var rightlose;
var moneyLeft;
var ret;
var retret;
var ballLeft = 0
var score = 0
var checkingToJump = false;
var areYouOnRight = false;
// ---balljs
var lose = document.getElementById('lose');
// -----------ball
var randomNumber = Math.floor(Math.random() * 81) + 30;
rightlose = parseFloat(randomNumber.toFixed(1)) * 10;
function setcoin() {
    var randomNumberCoin = Math.floor(Math.random() * 81) + 30;
    moneyLeft = parseFloat(randomNumberCoin.toFixed(1)) * 10;
    money.style.left = `${moneyLeft}px`;
}
setcoin()

function azaan() {
    ret = window.getComputedStyle(ball)
    retret = ret.getPropertyValue("right");
}
setInterval(azaan, 1000)

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        ballLeft += 10
        ball.style.left = `${ballLeft}px`;
    }
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        ballLeft -= 10
        ball.style.left = `${ballLeft}px`;
    }
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        var ball = document.getElementById('ball');
        var originalBottom = 0;
        ball.style.bottom = '120px';
        if (ballLeft == moneyLeft && event.key === "ArrowUp") {
            score++
            document.getElementById('scoringpoints').innerHTML = score
            setcoin()
        }
        else if (ballLeft == rightlose - 90 && event.key == "ArrowUp") {
            checkingToJump = true
            ball.style.left = `${ballLeft + 200}px`
            ballLeft += 200
            areYouOnRight = true

            setTimeout(function () {
                checkingToJump = false
            }, 500);
        }
        else if (ballLeft == rightlose + 80 && event.key == "ArrowUp") {
            checkingToJump = true
            ball.style.left = `${ballLeft - 200}px`
            ballLeft -= 200
            areYouOnRight = false

            setTimeout(function () {
                checkingToJump = false
            }, 500);
        }

        setTimeout(function () {
            ball.style.bottom = originalBottom;
        }, 500);
    }
});
// -----------ball
// ----------loose

lose.style.left = `${rightlose}px`;

function checkLoseGame() {
    if (ballLeft >= rightlose - 70 && checkingToJump == false && areYouOnRight == false || ballLeft == rightlose + 50 && checkingToJump == false) {
        location.reload()
    }
}
setInterval(checkLoseGame, 100)

function returnBall() {
    if (retret <= `100px`) {
        ballLeft = 0
    }
}
setInterval(returnBall, 10)
function one(){
    document.getElementById("l").style.backgroundImage = 'url("https://img.freepik.com/premium-vector/pixel-grass-ground-stone-blocks-pattern-cubic-pixel-game-background-8bit-gaming-interface-2d-technology-retro-wallpaper-backdrop-with-soil-layer-pebbles-underground-cross-section_8071-7295.jpg?w=2000")'
}
function two(){
    document.getElementById("l").style.backgroundImage = 'url("https://img.freepik.com/premium-vector/pixel-game-background-with-snow-ground-pattern_8071-6836.jpg?w=360")'
}
function three(){
    document.getElementById("l").style.backgroundImage = 'url("https://png.pngtree.com/thumb_back/fh260/background/20220509/pngtree-cubic-pixel-game-ground-blocks-on-background-pattern-image_1342712.jpg")'
}