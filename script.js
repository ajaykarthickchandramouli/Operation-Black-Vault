let bi = document.querySelector(".beginInvestigation");
let suspectStatus = document.querySelector("#suspectStatus");
let timeDisplay = document.querySelector(".timer");
let vaultStatus = document.querySelector("#vaultStatus");
let evidenceStatus = document.querySelector("#evidenceStatus");
let vaultPin = document.querySelector("#vaultPin");
let unlockVault = document.querySelector("#unlockVault");
let clues = document.querySelector(".clues");
let exp = document.querySelector(".exp");
let PIN = 0;
let biPressed = false;
let timeLeft = 300;
let timeInterval = 0;
bi.addEventListener("click", clickbi);
unlockVault.addEventListener("click", clickuv);
exp.addEventListener("click", clickexp);
console.log(clues);
exp.style.display = "none";
clues.style.display = "none";
function clickbi(){
    timeDisplay.textContent = "TIME REMAINING: 05:00";
    clues.style.display = "flex";
    biPressed = true;
    bi.disabled = true;
    bi.textContent = "INVESTIGATION IN PROGRESS";
    suspectStatus.textContent = "SUSPECT: INTERVIEW COMPLETE";
    timeInterval = setInterval(() => {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        if (minutes <=9){
            minutes = minutes.toString().padStart(2, "0");
        }
        if (seconds <= 9){
            seconds = seconds.toString().padStart(2,"0");
        }
        timeDisplay.textContent = `TIME REMAINING: ${minutes}:${seconds}`;
        if (timeLeft === 0){
        clearInterval(timeInterval);
        bi.textContent = "CASE FAILED BY TIME OUT!"
        vaultStatus.textContent = "VAULT: SEALED - TIME EXPIRED";
        evidenceStatus.textContent = "EVIDENCE: INVESTIGATION INCOMPLETE";
        exp.style.display = "flex";
        biPressed = false;
      }
    },1000);
}
function clickuv(){
    if(biPressed == true){
    PIN = vaultPin.value;
    if(PIN === "0153"){
        console.log("Correct! Vault unlocked!");
        vaultPin.value = "";
        suspectStatus.textContent = "SUSPECT: ARRESTED!";
        evidenceStatus.textContent = "EVIDENCE: PRESERVED FOR DOCUMENTATION.";
        vaultStatus.textContent = "VAULT: UNLOCKED!";
        bi.textContent = "INVESTIGATION COMPLETE!";
        exp.style.display = "flex";
        clearInterval(timeInterval);
        biPressed = false;
    }
    else{
        bi.textContent = "Incorrect pin. Try again till the timer runs.";
        exp.style.display = "flex";
    }
}
}
function clickexp(){
    window.location.href = "case-archive.html";
}