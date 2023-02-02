let count1 = 0  //HOME SCORE
let count2 = 0  // AWAY SCORE

let add1homeBtn = document.getElementById("add1-homebtn")
let add2homeBtn = document.getElementById("add2-homebtn")
let add3homeBtn = document.getElementById("add3-homebtn")
let homePoints = document.getElementById("home-points")


let add1awayBtn = document.getElementById("add1-awaybtn")
let add2awayBtn = document.getElementById("add2-awaybtn")
let add3awayBtn = document.getElementById("add3-awaybtn")
let awayPoints = document.getElementById("away-points")

let resetBtn = document.getElementById("reset-btn")


// HOME TEAM ADD POINTS
add1homeBtn.addEventListener("click", function(){
    count1++
    homePoints.textContent = count1
})

add2homeBtn.addEventListener("click", function(){
    count1 += 2
    homePoints.textContent = count1
})

add3homeBtn.addEventListener("click", function(){
    count1 += 3
    homePoints.textContent = count1
})

// AWAY TEAM ADD POINTS
add1awayBtn.addEventListener("click", function(){
    count2++
    awayPoints.textContent = count2
})

add2awayBtn.addEventListener("click", function(){
    count2 += 2
    awayPoints.textContent = count2
})

add3awayBtn.addEventListener("click", function(){
    count2 += 3
    awayPoints.textContent = count2
})


// RESET THE SCORE

resetBtn.addEventListener("click", function(){
    count1=0;
    count2=0;
    awayPoints.textContent = count2
    homePoints.textContent = count1
})


