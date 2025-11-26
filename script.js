let homeScorePoint = document.getElementById("home-score-point");
let guestScorePoint = document.getElementById("guest-score-point");
let homeScore = 0
let guestScore = 0

// home function
function homeScoreOne() {
  homeScore += 1
  homeScorePoint.textContent = homeScore
}

function homeScoreTwo() {
  homeScore += 2
  homeScorePoint.textContent = homeScore
}

function homeScoreThree() {
  homeScore += 3
  homeScorePoint.textContent = homeScore
}

// home decrement button
function homeDecrement() {
  homeScore -= 1
  homeScorePoint.textContent = homeScore
}

// home reset button
function homeReset() {
  homeScore = 0
  homeScorePoint.textContent = homeScore;
}



// guest function
function guestScoreOne() {
  guestScore += 1
  guestScorePoint.textContent = guestScore
}

function guestScoreTwo() {
  guestScore += 2
  guestScorePoint.textContent = guestScore
}

function guestScoreThree() {
  guestScore += 3
  guestScorePoint.textContent = guestScore
}

//  guest decrement button
function guestDecrement() {
  guestScore -= 1
  guestScorePoint.textContent = guestScore
}

// guest reset button
function guestReset() {
  guestScore = 0
  guestScorePoint.textContent = guestScore;
}

