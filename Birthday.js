function startQuest(){
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
}
function checkAnswer(answer){
    const result = document.getElementById("result");
    if (answer === "pancakes") {
        result.innerHTML = "🪄 Correct! You have passed the first trial.";
        setTimeout(() => {
            loadPuzzle2();
        }, 1500);
    }else {
        result.innerHTML = "💥 Wrong spell. Try again!";
    }
}
function loadPuzzle2() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("puzzle2").classList.remove("hidden");
}

function checkSpell(answer) {
    const result = document.getElementById("spellResult");
    if (answer.trim().toLowerCase() === "lumos") {
        result.innerHTML = "✨ The spell worked! You’ve unlocked the last trial.";
        setTimeout(() => {
            alert("The last challenge is calling you...");
            loadPuzzle3()
        }, 1500);
    } else {
        result.innerHTML = "💥 Your wand is broken. Try again!";
    }
}
function loadPuzzle3() {
    document.getElementById("puzzle2").classList.add("hidden");
    document.getElementById("puzzle3").classList.remove("hidden");
    // Easter egg in the console
    console.log("🪄 The secret password is: meow");
}

function checkPassword(answer) {
    const result = document.getElementById("passwordResult");
    if (answer.trim().toLowerCase() === "meow") {
        result.innerHTML = "✨ Correct! The final page unlocks...";
        setTimeout(() => {
            loadFinal();
        }, 1500);
    } else {
        result.innerHTML = "❌ Incorrect password. Look deeper...";
    }
}
function loadFinal() {
    document.getElementById("puzzle3").classList.add("hidden");
    document.getElementById("finalPage").classList.remove("hidden");
}

