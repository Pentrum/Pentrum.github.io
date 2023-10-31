window.addEventListener('scroll', function() {
    var projectsserver = document.getElementById('projectServer');
    var projectsclient = document.getElementById('projectClient');
    var projectsgames = document.getElementById('projectGames');
    var main3 = document.getElementById('main3');
    var users = document.getElementById('useramount');
    var registar = document.getElementById('registar');

    if (window.scrollY > 0) {
        projectsserver.style.opacity = "1";
        projectsserver.style.top = "75px";
        projectsclient.style.opacity = "1";
        projectsclient.style.top = "75px";
        projectsgames.style.opacity = "1";
        projectsgames.style.top = "75px";
    };

    if (window.scrollY > 300) {
        main3.style.top = "0px";
        main3.style.opacity = "1";

        users.style.top = "0px";
        users.style.opacity = "1";

        registar.style.top = "286px";
        registar.style.opacity = "1";
    };
});