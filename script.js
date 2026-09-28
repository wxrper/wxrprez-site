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