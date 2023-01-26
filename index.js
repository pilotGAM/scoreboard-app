let homeScorePlus1 = document.getElementById("btnPlus1")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

let guestScorePlus1 = document.getElementById("guestBtnPlus1")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function homePlus1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homePlus2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homePlus3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function guestPlus1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestPlus2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestPlus3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function resetMatch() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}