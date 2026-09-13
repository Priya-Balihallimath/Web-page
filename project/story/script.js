

const opening = document.getElementById("opening");
const names = document.getElementById("names");
const hill = document.getElementById("hill");

const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");

const boyNameInput = document.getElementById("boyName");
const girlNameInput = document.getElementById("girlName");

const errorMessage = document.getElementById("errorMessage");

const narration = document.getElementById("narration");



let boyName = "";
let girlName = "";



function showScene(scene) {

    document.querySelectorAll(".scene").forEach(item => {
        item.classList.remove("active");
    });

    scene.classList.add("active");
}



startButton.addEventListener("click", () => {

    showScene(names);

    boyNameInput.focus();

});


continueButton.addEventListener("click", () => {

    boyName = boyNameInput.value.trim();
    girlName = girlNameInput.value.trim();


    if (boyName === "" || girlName === "") {

        errorMessage.textContent =
            "Their story needs two names...";

        return;
    }


    errorMessage.textContent = "";


    showScene(hill);

    startHillStory();

});



function startHillStory() {

    const lines = [

        `Some people spend their lives trying to get everything.`,

        `${boyName} had.`,

        `Money. A family. A successful career.`,

        `He had become a doctor because he believed there was nothing more important than saving a life.`,

        `Yet there was one life he could never understand... his own.`,

        `He had never known his mother.`,

        `He had a father. He had a sister.`,

        `But somewhere inside him remained a question he had never been able to answer.`,

        `Who was his family... really?`,

        `And perhaps that was why, despite having everything...`,

        `${boyName} still felt alone.`

    ];


    playNarration(lines);

}



function playNarration(lines) {

    let index = 0;


    function showNextLine() {

        if (index >= lines.length) {

            narration.textContent =
                `${boyName} didn't know it yet... but his life was about to change.`;

            return;
        }


        narration.style.opacity = 0;


        setTimeout(() => {

            narration.textContent = lines[index];

            narration.style.transition =
                "opacity 1.5s ease";

            narration.style.opacity = 1;

            index++;

        }, 500);


        setTimeout(showNextLine, 4500);

    }


    showNextLine();

}