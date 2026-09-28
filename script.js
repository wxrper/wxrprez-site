// =========================
// TAB TITLE
// =========================

const title = "@wxrper";

let visible = title.length;

let fadingOut = true;


setInterval(() => {

    if (fadingOut) {

        visible--;

        // Keep @ visible
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

const enterScreen =
    document.getElementById("enter-screen");

const music =
    document.getElementById("bg-music");

const musicToggle =
    document.getElementById("music-toggle");


enterScreen.addEventListener("click", () => {

    enterScreen.classList.add("hidden");

    music.volume = 0.5;

    music.play();

    musicToggle.classList.add("show");

});


// =========================
// MUTE / UNMUTE
// =========================

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


// =========================
// VIEWER COUNT
// =========================

fetch(
    "https://api.counterapi.dev/v1/wxrperz-site/visits/up"
)

.then(response => response.json())

.then(data => {

    document.getElementById("view-count").textContent =
        data.count + " views";

})

.catch(error => {

    console.error("Viewer count error:", error);

    document.getElementById("view-count").textContent =
        "views";

});
