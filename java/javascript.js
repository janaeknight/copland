// document.getElementById("...").addEventListener("click", myFunction);
// element.addEventListener("click", function(){ alert("Hello World!"); });

    /* JAVASCRIPT COOKIES
    
        ----> Setting A Cookie
            document.cookie = "username=John Doe";
        ----> Reading Cookies
            var x = document.cookie;
                -- OR
                    document.cookie     returns all cookies in a string
        ----> 
    
    */

//  SETS DEFAULT BACKGROUND IMG (onload)

    document.body.style.backgroundImage = "url('https://i.ibb.co/n6FVW6V/1999.jpg')";
    document.body.style.backgroundSize = "850px";

//  SCREENSAVER / ACTIVITY TIMEOUT

    function onInactive(ms, cb) {

        var wait = setTimeout(cb, ms);

        document.onmousemove = document.mousedown = document.mouseup = document.onkeydown = document.onkeyup = document.focus = function () {
            clearTimeout(wait);
            wait = setTimeout(cb, ms);

            document.querySelector(".desktop").style.display = "flex";
            document.querySelector(".taskbar").style.display = "flex";
        };
    }
    onInactive(5000, function () {
        console.log('Inactive for 5 seconds');
        document.querySelector(".desktop").style.display = "none";
        document.querySelector(".taskbar").style.display = "none";
        document.body.style.backgroundImage = "none";
    });


// Close All Windows

    var allWindows = document.querySelectorAll(".window");
    document.getElementById("ts-4").addEventListener("click", closeWindows);
    function closeWindows() {
        //allWindows.style.display = "none";
        //console.log("All active windows have been closed.");
        console.log(allWindows);
    }


// Time - Taskbar

    var now    = new Date();
    var hour   = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var ap = "AM";
    if (hour   > 11) { ap = "PM";             }
    if (hour   > 12) { hour = hour - 12;      }
    if (hour   == 0) { hour = 12;             }
    if (hour   < 10) { hour   = "0" + hour;   }
    if (minute < 10) { minute = "0" + minute; }
    if (second < 10) { second = "0" + second; }
    var timeString = hour + ':' + minute  + " " + ap;
    document.getElementById("date").innerHTML = timeString;
    console.log(timeString);




    $(function() { $(".window").draggable(); }); // <!--- makes windows draggable


// Taskbar Tab Functions

    document.getElementById("ta-1").addEventListener("click", function(){ 
        document.getElementById("aboutComputerTerm").style.display = "block";
    });
    /*document.getElementById("").addEventListener("click", function(){ 
        document.getElementById("").style.display = "block";
    });
    document.getElementById("").addEventListener("click", function(){ 
        document.getElementById("").style.display = "block";
    });*/


// Desktop Tab Functions

    document.getElementById("dt-8").addEventListener("dblclick", function(){ 
        document.getElementById("themeTerm").style.display = "block";
    });

    // on .window click add class for z index to raise 4444 (activeZ) on (this)







// CREDITS

    /*

    👏🏻 http://osxdaily.com/2018/01/01/classic-mac-os-tiling-wallpapers/, classic wallpapers
    👏 http://www.iconarchive.com/artist/iconfactory.html, pseudo os icons
    👏🏿 https://stackoverflow.com/questions/24338450/how-to-detect-user-inactivity-with-javascript, imbondbaby -- timeout function


    */


// IMPORTANT LINKS

    /*

    🔗 https://ibb.co/album/mrzrva, copland os wallpaper arch.

    */







// THEMES

    // -- // IMG COLORS

        // removes grey background from selected option

            $(".thb").on( "click", function() {
                $(".thb").removeClass("bgSelectedOption");
                document.body.style.backgroundImage = "none";
            });
    
    $("#bgcPur").on( "click", function() {
        $("#bgcPur").addClass("bgSelectedOption");
        document.body.style.backgroundColor = "#63639D";    
    });
    $("#bgcBlue").on( "click", function() {
        $("#bgcBlue").addClass("bgSelectedOption");
        document.body.style.backgroundColor = "cadetblue";    
    });
    $("#bgcGreen").on( "click", function() {
        $("#bgcGreen").addClass("bgSelectedOption");
        document.body.style.backgroundColor = "greenyellow";    
    });
    $("#bgcRed").on( "click", function() {
        $("#bgcRed").addClass("bgSelectedOption");
        document.body.style.backgroundColor = "tomato";    
    });
    $("#bgcLiPink").on( "click", function() {
        $("#bgcLiPink").addClass("bgSelectedOption");
        document.body.style.backgroundColor = "lightpink";    
    });
    $("#bgcHotPink").on( "click", function() {
        $("#bgcHotPink").addClass("bgSelectedOption");
        document.body.style.backgroundColor = "magenta";    
    });
    $("#bgcTurq").on( "click", function() {
        $("#bgcTurq").addClass("bgSelectedOption");
        document.body.style.backgroundColor = "turquoise";    
    });
    $("#bgcGray").on( "click", function() {
        $("#bgcGray").addClass("bgSelectedOption");
        document.body.style.backgroundColor = "gray";    
    });
    $("#bgcOrange").on( "click", function() {
        $("#bgcOrange").addClass("bgSelectedOption");
        document.body.style.backgroundColor = "coral";    
    });

    // -- // IMG WALLPAPERS

    $("#bgcPurp1").on( "click", function() {
        $("#bgcPurp1").addClass("bgSelectedOption");
            document.body.style.backgroundImage = "url('https://i.ibb.co/j9Ysj3F/classic-mac-os-tile-wallpapers-1.png')";
            document.body.style.backgroundSize = "128px";
    });
    $("#bgcPurp2").on( "click", function() {
        $("#bgcPurp2").addClass("bgSelectedOption");
            document.body.style.backgroundImage = "url('https://i.ibb.co/dPj3zBx/classic-mac-os-tile-wallpapers-3.png')";
            document.body.style.backgroundSize = "128px";
    });
    $("#bgcPurp3").on( "click", function() {
        $("#bgcPurp3").addClass("bgSelectedOption");
            document.body.style.backgroundImage = "url('https://i.ibb.co/0X0v7NZ/classic-mac-os-tile-wallpapers-8.png')";
            document.body.style.backgroundSize = "128px";
    });
    $("#bgcBlue1").on( "click", function() {
        $("#bgcBlue1").addClass("bgSelectedOption");
            document.body.style.backgroundImage = "url('https://i.ibb.co/0tZW83X/classic-mac-os-tile-wallpapers-9.png')";
            document.body.style.backgroundSize = "128px";
    });
    $("#bgcBlack1").on( "click", function() {
        $("#bgcBlack1").addClass("bgSelectedOption");
            document.body.style.backgroundImage = "url('https://i.ibb.co/Lpx2M5V/classic-mac-os-tile-wallpapers-6.png')";
            document.body.style.backgroundSize = "128px";
    });
    $("#bgcCat").on( "click", function() {
        $("#bgcCat").addClass("bgSelectedOption");
            document.body.style.backgroundImage = "url('https://i.ibb.co/NsTxX1G/classic-mac-os-tile-wallpapers-4.png')";
            document.body.style.backgroundSize = "128px";
    });
    $("#bgcStars").on( "click", function() {
        $("#bgcStars").addClass("bgSelectedOption");
            document.body.style.backgroundImage = "url('https://i.ibb.co/YT66PvK/classic-mac-os-tile-wallpapers-2.png')";
            document.body.style.backgroundSize = "128px";
    });
    $("#bgcCircut").on( "click", function() {
        $("#bgcCircut").addClass("bgSelectedOption");
            document.body.style.backgroundImage = "url('https://i.ibb.co/f0FSTD4/classic-mac-os-tile-wallpapers-7.png')";
            document.body.style.backgroundSize = "128px";
    });
    $("#bgcLines").on( "click", function() {
        $("#bgcLines").addClass("bgSelectedOption");
            document.body.style.backgroundImage = "url('https://i.ibb.co/F4Y8rxD/purplline.jpg')";
            document.body.style.backgroundSize = "300px";
    });
    $("#bgcAge").on( "click", function() {
        $("#bgcAge").addClass("bgSelectedOption");
            document.body.style.backgroundImage = "url('https://i.ibb.co/n6FVW6V/1999.jpg')";
            document.body.style.backgroundSize = "850px";
    });

    // -------------> add highlight to article buttons on click