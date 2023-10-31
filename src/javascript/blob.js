document.addEventListener("DOMContentLoaded", function(event) {
    const blob = document.getElementById("jerry");
    const blob2 = document.getElementById("fatjerry");

    window.onpointermove = event => {
        const { clientX, clientY } = event;

        blob.animate(
            {
                left: `${clientX}px`,
                top: `${clientY}px`
            },
            { duration: 1000, fill: "forwards" }
        );
        blob2.animate(
            {
                left: `${clientX}px`,
                top: `${clientY}px`
            },
            { duration: 15000, fill: "forwards" }
        );

    };
});