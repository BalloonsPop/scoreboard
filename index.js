let scoreHome = 0
let scoreGuest = 0

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function homeplus1() {
    scoreHome += 1
    homeScore.textContent = scoreHome
}

function homeplus2() {
    scoreHome += 2
    homeScore.textContent = scoreHome
}

function homeplus3() {
    scoreHome += 3
    homeScore.textContent = scoreHome
}

function guestplus1() {
    scoreGuest += 1
    guestScore.textContent = scoreGuest
}

function guestplus2() {
    scoreGuest += 2
    guestScore.textContent = scoreGuest
}

function guestplus3() {
    scoreGuest += 3
    guestScore.textContent = scoreGuest
}