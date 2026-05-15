const HomeTeamScoreEl = document.getElementById('HomeTeamScore');
const GuestTeamScoreEl = document.getElementById('GuestTeamScore');
const HomeTeamPlus1El = document.getElementById('HomeTeamPlus1');
const HomeTeamPlus2El = document.getElementById('HomeTeamPlus2');
const HomeTeamPlus3El = document.getElementById('HomeTeamPlus3');
const GuestTeamPlus1El = document.getElementById('GuestTeamPlus1');
const GuestTeamPlus2El = document.getElementById('GuestTeamPlus2');
const GuestTeamPlus3El = document.getElementById('GuestTeamPlus3');
const newGameBtn = document.getElementById('newGame-btn');
const leadTeamEl= document.getElementById('leadTeam-el');

const Team1Elment = document.querySelector('team1name-el');
const Team2Elment = document.querySelector('team2name-el');

// console.log(leadTeamEl);

let homeTeamScoreCount = 0;
let guestTeamScoreCount = 0;

function frintLeadTeam() {
    if (homeTeamScoreCount === guestTeamScoreCount) {
        leadTeamEl.textContent = 'No one is leading 👏';
    }
    else if (homeTeamScoreCount > guestTeamScoreCount) {
        leadTeamEl.textContent = Team1Elment + ' is leading 👏';
    }
    else {
        leadTeamEl.textContent = Team2Elment + ' is leading 👏';
    }
}

function startCountdown(durationInMinutes) {
    let timer = durationInMinutes * 60;
    let minutes, seconds;
    const display = document.getElementById('clock-el');

    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "00:00";
            alert("Hết thời gian!"); // Tùy chọn: thông báo khi hết giờ
        }
    }, 1000);
}

HomeTeamPlus1El.addEventListener('click', function (){
    homeTeamScoreCount += 1;
    HomeTeamScoreEl.textContent = homeTeamScoreCount; 
    frintLeadTeam();
})

HomeTeamPlus2El.addEventListener('click', function (){
    homeTeamScoreCount += 2;
    HomeTeamScoreEl.textContent = homeTeamScoreCount;
    frintLeadTeam();
})

HomeTeamPlus3El.addEventListener('click', function (){
    homeTeamScoreCount += 3;
    HomeTeamScoreEl.textContent = homeTeamScoreCount;
    frintLeadTeam();
})

GuestTeamPlus1El.addEventListener('click', function() {
    guestTeamScoreCount += 1;
    GuestTeamScoreEl.textContent = guestTeamScoreCount;
    frintLeadTeam();
})

GuestTeamPlus2El.addEventListener('click', function() {
    guestTeamScoreCount += 2;
    GuestTeamScoreEl.textContent = guestTeamScoreCount;
    frintLeadTeam();
})

GuestTeamPlus3El.addEventListener('click', function() {
    guestTeamScoreCount += 3;
    GuestTeamScoreEl.textContent = guestTeamScoreCount;
    frintLeadTeam();
})

newGameBtn.addEventListener('click', function () {
    homeTeamScoreCount = 0;
    guestTeamScoreCount = 0;
    HomeTeamScoreEl.textContent = homeTeamScoreCount;
    GuestTeamScoreEl.textContent = guestTeamScoreCount;
    startCountdown(48);
})