function startQuest(){
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
}
function checkAnswer(answer){
    const result = document.getElementById("result");
    if (answer === "pancakes") {
        result.innerHTML = "🪄 Correct! You have passed the first trial.";
        setTimeout(() => {
            alert("A new magical puzzle awaits you...");
        }, 1500);
    }else {
        result.innerHTML = "💥 Wrong spell. Try again!";
    }
}