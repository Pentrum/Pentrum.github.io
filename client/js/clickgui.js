var isShiftPressed = false;

$(document).keydown(function(e) {
    if (e.originalEvent.code === 'ShiftRight') {
        if (!isShiftPressed) {
            $('.clickhide').css('opacity', '1');
            $('.clickhide').css('pointer-events', 'auto');

            $('.clickgui').css('opacity', '1');
            $('.clickgui').css('scale', '1');
            $('.clickgui').css('transition', 'opacity 0.5s ease 0.4s, scale 0.5s ease 0.2s');

            $('.renderfill').css('width', '85%');
            $('.renderfill').css('transition', 'width 0.3s ease-in-out');
            isShiftPressed = true;
        } else {
            $('.clickhide').css('opacity', '0');
            $('.clickhide').css('pointer-events', 'none');

            $('.clickgui').css('opacity', '0');
            $('.clickgui').css('scale', '0.5');
            $('.clickgui').css('transition', 'opacity 0.6s ease 0s, scale 0.5s ease-in 0s');

            $('.renderfill').css('width', '79%');
            $('.renderfill').css('transition', 'width 0.3s ease-in-out');
            isShiftPressed = false;
        }
    }
});
$(document).ready(function(){
    $(".tutorialyes").click(function(){
        $('.tutorial').css('opacity', '0');
        $('.tutorial').css('pointer-events', 'none');
        $('.tutorial').css('transition', 'opacity 0.2s ease 0s');

        $('.ontutorial').css('opacity', '1');
        $('.ontutorial').css('pointer-events', 'auto');
        $('.ontutorial').css('transition', 'opacity 0.2s ease 0s');

        $('.clicktitle').css('scale', '1');
        $('.clicktitle').css('top', '-0.4vmax');
        $('.clicktitle').css('left', '1vmax');
        $('.clicktitle').css('translate', '0% 0%');
        $('.clicktitle').css('transition', 'scale 0.2s ease-in-out 0s, top 0.3s ease-in-out, left 0.3s ease-in-out, translate 0.3s ease-in-out');
    })
});
$(document).ready(function(){
    $(".ontutorialbutton").click(function(){
        $('.ontutorial').css('opacity', '0');
        $('.ontutorial').css('pointer-events', 'none');
        $('.ontutorial').css('transition', 'opacity 0.2s ease 0s');

        $('.clickmain').css('opacity', '1');
        $('.clickmain').css('pointer-events', 'auto');
        $('.clickmain').css('transition', 'opacity 0.2s ease 0.2s');
    })
    $(".tutorialno").click(function(){
        $('.tutorial').css('opacity', '0');
        $('.tutorial').css('pointer-events', 'none');
        $('.tutorial').css('transition', 'opacity 0.2s ease 0s');

        $('.clickmain').css('opacity', '1');
        $('.clickmain').css('pointer-events', 'auto');
        $('.clickmain').css('transition', 'opacity 0.2s ease 0.2s');

        $('.clicktitle').css('scale', '1');
        $('.clicktitle').css('top', '-0.4vmax');
        $('.clicktitle').css('left', '1vmax');
        $('.clicktitle').css('translate', '0% 0%');
        $('.clicktitle').css('transition', 'scale 0.2s ease-in-out 0s, top 0.3s ease-in-out, left 0.3s ease-in-out, translate 0.3s ease-in-out');
    })
});
$(document).ready(function(){
    $(".catmain").click(function(){
        $('.mainbox').css('opacity', '1');
        $('.mainbox').css('pointer-events', 'auto');
        $('.mainbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catmain').css('background', 'var(--bg)');
        $('.catmaintext').css('color', 'var(--txt)');
        $('.decmain').css('opacity', '1');
        $('.catmain').css('transition', 'background 0.2s ease 0s');
        $('.catmaintext').css('transition', 'color 0.2s ease 0s');
        $('.decmain').css('transition', 'opacity 0.2s ease 0s');

        $('.modulesbox').css('opacity', '0');
        $('.modulesbox').css('pointer-events', 'none');
        $('.modulesbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catmodules').css('background', 'var(--bg1)');
        $('.catmodulestext').css('color', 'var(--out)');
        $('.decmodules').css('opacity', '0');
        $('.catmodules').css('transition', 'background 0.2s ease 0s');
        $('.catmodulestext').css('transition', 'color 0.2s ease 0s');
        $('.decmodules').css('transition', 'opacity 0.2s ease 0s');

        $('.gptbox').css('opacity', '0');
        $('.gptbox').css('pointer-events', 'none');
        $('.gptbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catgpt').css('background', 'var(--bg1)');
        $('.catgpttext').css('color', 'var(--out)');
        $('.decgpt').css('opacity', '0');
        $('.catgpt').css('transition', 'background 0.2s ease 0s');
        $('.catgpttext').css('transition', 'color 0.2s ease 0s');
        $('.decgpt').css('transition', 'opacity 0.2s ease 0s');

        $('.settingsbox').css('opacity', '0');
        $('.settingsbox').css('pointer-events', 'none');
        $('.settingsbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catsettings').css('background', 'var(--bg1)');
        $('.catsettingstext').css('color', 'var(--out)');
        $('.decsettings').css('opacity', '0');
        $('.catsettings').css('transition', 'background 0.2s ease 0s');
        $('.catsettingstext').css('transition', 'color 0.2s ease 0s');
        $('.decsettings').css('transition', 'opacity 0.2s ease 0s');
    })
    $(".catmodules").click(function(){
        $('.mainbox').css('opacity', '0');
        $('.mainbox').css('pointer-events', 'none');
        $('.mainbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catmain').css('background', 'var(--bg1)');
        $('.catmaintext').css('color', 'var(--out)');
        $('.decmain').css('opacity', '0');
        $('.catmain').css('transition', 'background 0.2s ease 0s');
        $('.catmaintext').css('transition', 'color 0.2s ease 0s');
        $('.decmain').css('transition', 'opacity 0.2s ease 0s');

        $('.modulesbox').css('opacity', '1');
        $('.modulesbox').css('pointer-events', 'auto');
        $('.modulesbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catmodules').css('background', 'var(--bg)');
        $('.catmodulestext').css('color', 'var(--txt)');
        $('.decmodules').css('opacity', '1');
        $('.catmodules').css('transition', 'background 0.2s ease 0s');
        $('.catmodulestext').css('transition', 'color 0.2s ease 0s');
        $('.decmodules').css('transition', 'opacity 0.2s ease 0s');

        $('.gptbox').css('opacity', '0');
        $('.gptbox').css('pointer-events', 'none');
        $('.gptbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catgpt').css('background', 'var(--bg1)');
        $('.catgpttext').css('color', 'var(--out)');
        $('.decgpt').css('opacity', '0');
        $('.catgpt').css('transition', 'background 0.2s ease 0s');
        $('.catgpttext').css('transition', 'color 0.2s ease 0s');
        $('.decgpt').css('transition', 'opacity 0.2s ease 0s');

        $('.settingsbox').css('opacity', '0');
        $('.settingsbox').css('pointer-events', 'none');
        $('.settingsbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catsettings').css('background', 'var(--bg1)');
        $('.catsettingstext').css('color', 'var(--out)');
        $('.decsettings').css('opacity', '0');
        $('.catsettings').css('transition', 'background 0.2s ease 0s');
        $('.catsettingstext').css('transition', 'color 0.2s ease 0s');
        $('.decsettings').css('transition', 'opacity 0.2s ease 0s');
    })
    $(".catgpt").click(function(){
        $('.mainbox').css('opacity', '0');
        $('.mainbox').css('pointer-events', 'none');
        $('.mainbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catmain').css('background', 'var(--bg1)');
        $('.catmaintext').css('color', 'var(--out)');
        $('.decmain').css('opacity', '0');
        $('.catmain').css('transition', 'background 0.2s ease 0s');
        $('.catmaintext').css('transition', 'color 0.2s ease 0s');
        $('.decmain').css('transition', 'opacity 0.2s ease 0s');

        $('.modulesbox').css('opacity', '0');
        $('.modulesbox').css('pointer-events', 'none');
        $('.modulesbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catmodules').css('background', 'var(--bg1)');
        $('.catmodulestext').css('color', 'var(--out)');
        $('.decmodules').css('opacity', '0');
        $('.catmodules').css('transition', 'background 0.2s ease 0s');
        $('.catmodulestext').css('transition', 'color 0.2s ease 0s');
        $('.decmodules').css('transition', 'opacity 0.2s ease 0s');

        $('.gptbox').css('opacity', '1');
        $('.gptbox').css('pointer-events', 'auto');
        $('.gptbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catgpt').css('background', 'var(--bg)');
        $('.catgpttext').css('color', 'var(--txt)');
        $('.decgpt').css('opacity', '1');
        $('.catgpt').css('transition', 'background 0.2s ease 0s');
        $('.catgpttext').css('transition', 'color 0.2s ease 0s');
        $('.decgpt').css('transition', 'opacity 0.2s ease 0s');

        $('.settingsbox').css('opacity', '0');
        $('.settingsbox').css('pointer-events', 'none');
        $('.settingsbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catsettings').css('background', 'var(--bg1)');
        $('.catsettingstext').css('color', 'var(--out)');
        $('.decsettings').css('opacity', '0');
        $('.catsettings').css('transition', 'background 0.2s ease 0s');
        $('.catsettingstext').css('transition', 'color 0.2s ease 0s');
        $('.decsettings').css('transition', 'opacity 0.2s ease 0s');
    })
    $(".catsettings").click(function(){
        $('.mainbox').css('opacity', '0');
        $('.mainbox').css('pointer-events', 'none');
        $('.mainbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catmain').css('background', 'var(--bg1)');
        $('.catmaintext').css('color', 'var(--out)');
        $('.decmain').css('opacity', '0');
        $('.catmain').css('transition', 'background 0.2s ease 0s');
        $('.catmaintext').css('transition', 'color 0.2s ease 0s');
        $('.decmain').css('transition', 'opacity 0.2s ease 0s');

        $('.modulesbox').css('opacity', '0');
        $('.modulesbox').css('pointer-events', 'none');
        $('.modulesbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catmodules').css('background', 'var(--bg1)');
        $('.catmodulestext').css('color', 'var(--out)');
        $('.decmodules').css('opacity', '0');
        $('.catmodules').css('transition', 'background 0.2s ease 0s');
        $('.catmodulestext').css('transition', 'color 0.2s ease 0s');
        $('.decmodules').css('transition', 'opacity 0.2s ease 0s');

        $('.gptbox').css('opacity', '0');
        $('.gptbox').css('pointer-events', 'none');
        $('.gptbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catgpt').css('background', 'var(--bg1)');
        $('.catgpttext').css('color', 'var(--out)');
        $('.decgpt').css('opacity', '0');
        $('.catgpt').css('transition', 'background 0.2s ease 0s');
        $('.catgpttext').css('transition', 'color 0.2s ease 0s');
        $('.decgpt').css('transition', 'opacity 0.2s ease 0s');

        $('.settingsbox').css('opacity', '1');
        $('.settingsbox').css('pointer-events', 'auto');
        $('.settingsbox').css('transition', 'opacity 0.2s ease 0s');
        $('.catsettings').css('background', 'var(--bg)');
        $('.catsettingstext').css('color', 'var(--txt)');
        $('.decsettings').css('opacity', '1');
        $('.catsettings').css('transition', 'background 0.2s ease 0s');
        $('.catsettingstext').css('transition', 'color 0.2s ease 0s');
        $('.decsettings').css('transition', 'opacity 0.2s ease 0s');
    })
});

$(document).ready(function(){
    $(".profilepfp").hover(
        function(){ // Mouse enter
            $(".profilepfpund").css("filter", "blur(1vmax)");
            $(".profilepfpund").css("transition", "filter 0.3s ease");
        },
        function(){ // Mouse leave
            $(".profilepfpund").css("filter", "blur(0vmax)");
            $(".profilepfpund").css("transition", "filter 0.3s ease");
        }
    );
});

$(document).ready(function(){
    $(".darkbutton").click(function(){
        $(":root").css("--bg", "rgba(200, 200, 201,1)");
        $(":root").css("--bg1", "rgba(215, 215, 216,1)");
        $(":root").css("--bg2", "rgba(230, 230, 229,1)");
        $(":root").css("--bg3", "rgba(200, 200, 201,0.25)");
        $(":root").css("--out", "rgba(40, 40, 40,1)");
        $(":root").css("--txt", "rgba(10, 10, 10,1)");
        $(":root").css("--icon", "filter: invert(7%) sepia(4%) saturate(855%) hue-rotate(201deg) brightness(97%) contrast(106%)");


        $(".darkbutton").css("opacity", "0");
        $(".darkbutton").css("pointer-events", "none");

        $(".lightbutton").css("opacity", "1");
        $(".lightbutton").css("pointer-events", "auto");
    })
    $(".lightbutton").click(function(){
        $(":root").css("--bg", "rgba(9, 9, 11,1)");
        $(":root").css("--bg1", "rgba(5, 5, 6,1)");
        $(":root").css("--bg2", "rgba(15,15,17,1)");
        $(":root").css("--bg3", "rgba(9, 9, 11,0.25)");
        $(":root").css("--out", "rgba(40,40,42,1)");
        $(":root").css("--txt", "rgba(220, 220, 220,1)");
        $(":root").css("--icon", "invert(92%) sepia(0%) saturate(75%) hue-rotate(147deg) brightness(96%) contrast(94%)");


        $(".lightbutton").css("opacity", "0");
        $(".lightbutton").css("pointer-events", "none");

        $(".darkbutton").css("opacity", "1");
        $(".darkbutton").css("pointer-events", "auto");
    })

    $(".rose").click(function(){
        $(":root").css("--pri", "rgba(253, 64, 64, 1)");
        $(":root").css("--pri2", "rgba(253, 64, 64, 0.1)");
        $(":root").css("--acc", "rgba(255, 55, 175, 1)");
        $(":root").css("--acc2", "rgba(255, 55, 175, 0.1)");
    })
    $(".candy").click(function(){
        $(":root").css("--pri", "rgba(75, 119, 255,1)");
        $(":root").css("--pri2", "rgba(75, 119, 255,0.1)");
        $(":root").css("--acc", "rgba(174, 75, 255,1)");
        $(":root").css("--acc2", "rgba(174, 75, 255,0.1)");
    })
    $(".toxic").click(function(){
        $(":root").css("--pri", "rgba(99, 255, 75,1)");
        $(":root").css("--pri2", "rgba(99, 255, 75,0.1)");
        $(":root").css("--acc", "rgba(72, 157, 46,1)");
        $(":root").css("--acc2", "rgba(72, 157, 46,0.1)");
    })
    $(".grapefruit").click(function(){
        $(":root").css("--pri", "rgba(255, 177, 75,1)");
        $(":root").css("--pri2", "rgba(255, 177, 75,0.1)");
        $(":root").css("--acc", "rgba(255, 99, 76,1)");
        $(":root").css("--acc2", "rgba(255, 99, 76,0.1)");
    })
    $(".fresh").click(function(){
        $(":root").css("--pri", "rgba(75, 165, 255,1)");
        $(":root").css("--pri2", "rgba(75, 165, 255,0.1)");
        $(":root").css("--acc", "rgba(61, 201, 68,1)");
        $(":root").css("--acc2", "rgba(61, 201, 68,0.1)");
    })
});
