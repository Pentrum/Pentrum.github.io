document.addEventListener("DOMContentLoaded", function(event) {
    const blob = document.getElementById("jerry");
    const blob2 = document.getElementById("fatjerry");
    const funny = document.getElementById("errorevent");

    window.onpointermove = event => {
        const { clientX, clientY } = event;

        blob.animate(
            {
                left: `${clientX}px`,
                top: `${clientY}px`
            },
            { duration: 250, fill: "forwards" }
        );
        blob2.animate(
            {
                left: `${clientX}px`,
                top: `${clientY}px`
            },
            { duration: 10000, fill: "forwards" }
        );
        funny.animate(
            {
                left: `${clientX}px`,
                top: `${clientY}px`
            },
            { duration: 3000, fill: "forwards" }
        );
    };
});