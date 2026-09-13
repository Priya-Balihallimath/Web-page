
const scenes = document.querySelectorAll(".scene");

let currentScene = 0;

function showScene(index) {
    scenes.forEach((scene, sceneIndex) => {
        scene.classList.toggle("active", sceneIndex === index);
    });
}

function playPresentation() {
    showScene(currentScene);

    setInterval(() => {
        currentScene++;

        if (currentScene >= scenes.length) {
            currentScene = 0;
        }

        showScene(currentScene);
    }, 2500);
}

playPresentation();