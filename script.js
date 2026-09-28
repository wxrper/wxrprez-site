const title = "@wxrper";
let visible = title.length;
let fadingOut = true;

setInterval(() => {
    if (fadingOut) {
        visible--;

        // Keep the @
        if (visible < 1) {
            visible = 1;
            fadingOut = false;
        }

        document.title = title.slice(0, visible);

    } else {
        visible++;

        document.title = title.slice(0, visible);

        if (visible === title.length) {
            fadingOut = true;
        }
    }
}, 300);


// =========================
// MUSIC
// =========================

const enterScreen = document.getElementById("enter-screen");
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

enterScreen.addEventListener("click", () => {

    enterScreen.classList.add("hidden");

    music.volume = 0.5;

    music.play();

    musicToggle.classList.add("show");

});

musicToggle.addEventListener("click", () => {

    music.muted = !music.muted;

    if (music.muted) {

        musicToggle.innerHTML =
            '<i class="fa-solid fa-volume-xmark"></i>';

    } else {

        musicToggle.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

    }

});

        musicToggle.innerHTML =
            '<i class="fa-solid fa-volume-xmark"></i>';

    } else {

        musicToggle.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

    }

});
