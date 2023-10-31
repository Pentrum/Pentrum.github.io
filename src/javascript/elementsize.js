
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var navbarunderglow = document.getElementById('navbarunderglow');
    var projectsserver = document.getElementById('projectServer');
    var projectsclient = document.getElementById('projectClient');
    var projectsgames = document.getElementById('projectGames');
    var title = document.getElementsByClassName('title')[0];

    if (window.scrollY > 10) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        navbar.style.boxShadow = '0px 5px 20px rgba(19, 19, 19, 0.8)';
        navbarunderglow.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        navbarunderglow.style.opacity = "0";



        navbar.addEventListener('mouseover', () => {
            title.style.textShadow = '';

        });
    } else {
        navbar.style.backgroundColor = 'rgba(29, 33, 40, 1)';
        navbar.style.boxShadow = '0px 0px 0px rgba(19, 19, 19, 0.8)';
        navbarunderglow.style.background = 'linear-gradient(270deg, #5957d7, #ff41bd)';
        navbarunderglow.style.opacity = "1";
    }

    if (window.scrollY > 420) {
        title.style.color = 'rgba(255, 255, 255, 1)';
        navbar.addEventListener('mouseover', () => {
            title.style.textShadow = '0px 0px 25px #ffffff';
        });
    } else {
        title.style.color = '';
        navbar.addEventListener('mouseout', () => {
            title.style.textShadow = '';
        });
    }
});