function showPage(id) {
    document.querySelectorAll(".container").forEach(c => {
        c.classList.add("hidden");
        c.classList.remove("show");
    });
    const page = document.getElementById(id);
    page.classList.remove("hidden");
    setTimeout(() => page.classList.add("show"), 50);
}

function startQuest() {
    const music = document.getElementById("bgMusic");
    music.volume = 0; // start muted
    music.play().catch(err => {
        console.log("Autoplay blocked, will start after interaction:", err);
    });

    // Fade in the volume
    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 0.3) {
            vol += 0.01;
            music.volume = vol;
        } else {
            clearInterval(fade);
        }
    }, 200);

    showPage("quiz");
}


function checkAnswer(answer) {
    const result = document.getElementById("result");
    if (answer === "pancakes") {
        result.innerHTML = "🪄 Correct! You have passed the first trial.";
        setTimeout(() => showPage("puzzle2"), 1500);
    } else {
        result.innerHTML = "💥 Wrong spell. Try again!";
    }
}

function checkSpell(answer) {
    const result = document.getElementById("spellResult");
    if (answer.trim().toLowerCase() === "lumos") {
        result.innerHTML = "✨ The spell worked! You’ve unlocked the last trial.";
        setTimeout(() => showPage("puzzle3"), 1500);
    } else {
        result.innerHTML = "💥 Your wand is broken. Try again!";
    }
}

function checkPassword(answer) {
    const result = document.getElementById("passwordResult");
    if (answer.trim().toLowerCase() === "meow") {
        result.innerHTML = "✨ Correct! The final page unlocks...";
        setTimeout(() => loadFinal(), 1500);
    } else {
        result.innerHTML = "❌ Incorrect password. Look deeper...";
    }
}

function loadFinal() {
    showPage("finalPage");

    // Confetti on load
    confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });

    // Typewriter message
    typeWriter(
        "✨ Happy 20th Birthday, wizard! ✨<br>💌 Min lovely boyfriend 💌<br>Jeg, Luna og Silvia håper du har en fin bursdag🎉",
        "finalPageMessage"
    );

    // Reset present listeners to avoid duplicates
    const oldPresent = document.getElementById("present");
    if (oldPresent) {
        const newPresent = oldPresent.cloneNode(true);
        oldPresent.parentNode.replaceChild(newPresent, oldPresent);

        newPresent.addEventListener("click", function() {
            newPresent.classList.add("hidden"); // hide present
            document.getElementById("cats").classList.remove("hidden"); // show cats
            confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
        });
    }
}
// Typewriter function that handles <br>
function typeWriter(text, elementId, speed = 50) {
    const el = document.getElementById(elementId);
    el.innerHTML = "";
    let i = 0;
    const interval = setInterval(() => {
        if (text.slice(i, i + 4) === "<br>") {
            el.innerHTML += "<br>";
            i += 4;
        } else {
            el.innerHTML += text.charAt(i);
            i++;
        }
        if (i >= text.length) clearInterval(interval);
    }, speed);
}



