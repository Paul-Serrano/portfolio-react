const functionsList = [
    {
        fadeaway: function fadeAway(a) {
            a.style.animation = "fadeaway 0.5s forwards linear";
        },

        delay: function delay(a, b) {
            setTimeout(function fadeOn() {
                a.style.display = "flex";
                b.style.display = "none";
                a.style.animation = "fadeon 0.5s forwards linear";
            }, 500);
        }
    }
]

export default functionsList
