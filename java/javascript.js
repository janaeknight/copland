// document.getElementById("...").addEventListener("click", myFunction);

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




    $(function() {
        $("#themeTerm").draggable();
        $("#aboutComputerTerm").draggable();
        $("#erscTerm").draggable();
        $("#").draggable();
        $("#").draggable(); // .window draggable???
        $("#").draggable();
        $("#").draggable();
        $("#").draggable();
        $("#").draggable();
    });







// CREDITS

    /*

    👏 http://osxdaily.com/2018/01/01/classic-mac-os-tiling-wallpapers/, classic wallpapers
    👏 http://www.iconarchive.com/artist/iconfactory.html, pseudo os icons


    */


// IMPORTANT LINKS

    /*

    🔗 https://ibb.co/album/mrzrva, copland os wallpaper arch.

    */

// THEMES

    // -- // IMG COLORS

    document.getElementById("colorSub").addEventListener("click", colorSub)
    function colorSub() {
        let cbgSel = document.getElementById("cbgSel");
        let cbgSelected = cbgSel.options[cbgSel.selectedIndex].text;
        console.log("User selected background color: " +cbgSelected,);
        document.body.style.backgroundImage = "none";

        if (cbgSelected == "Purple") {
            document.body.style.backgroundColor = "#63639D";
        }
        if (cbgSelected == "Blue") {
            document.body.style.backgroundColor = "cadetblue";
        }
        if (cbgSelected == "Green") {
            document.body.style.backgroundColor = "greenyellow";
        }
        if (cbgSelected == "Orange") {
            document.body.style.backgroundColor = "coral";
        }
        if (cbgSelected == "Red") {
            document.body.style.backgroundColor = "tomato";
        }
        if (cbgSelected == "Yellow") {
            document.body.style.backgroundColor = "khaki";
        }
        if (cbgSelected == "Light Pink") {
            document.body.style.backgroundColor = "lightsalmon";
        }
        if (cbgSelected == "Hot Pink") {
            document.body.style.backgroundColor = "magenta";
        }
    }

    // -- // IMG BACKGROUNDS

    document.getElementById("themeSub").addEventListener("click", themeSub)
    function themeSub() {
        let ibgSel = document.getElementById("ibgSel");
        let ibgSelected = ibgSel.options[ibgSel.selectedIndex].text;
        console.log("User selected background: " +ibgSelected,);
        document.body.style.backgroundImage = "none";

        if (ibgSelected == "None") {
            document.body.style.backgroundColor = "#63639D";
        }
        if (ibgSelected == "Purple 1") {
            document.body.style.backgroundImage = "url('https://i.ibb.co/j9Ysj3F/classic-mac-os-tile-wallpapers-1.png')";
            document.body.style.backgroundSize = "128px";
        }
        if (ibgSelected == "Purple 2") {
            document.body.style.backgroundImage = "url('https://i.ibb.co/dPj3zBx/classic-mac-os-tile-wallpapers-3.png')";
            document.body.style.backgroundSize = "128px";
        }
        if (ibgSelected == "Purple 3") {
            document.body.style.backgroundImage = "url('https://i.ibb.co/0X0v7NZ/classic-mac-os-tile-wallpapers-8.png')";
            document.body.style.backgroundSize = "128px";
        }
        if (ibgSelected == "Blue 1") {
            document.body.style.backgroundImage = "url('https://i.ibb.co/0tZW83X/classic-mac-os-tile-wallpapers-9.png')";
            document.body.style.backgroundSize = "128px";
        }
        if (ibgSelected == "Black 1") {
            document.body.style.backgroundImage = "url('https://i.ibb.co/Lpx2M5V/classic-mac-os-tile-wallpapers-6.png')";
            document.body.style.backgroundSize = "128px";
        }
        if (ibgSelected == "Floating Cat") {
            document.body.style.backgroundImage = "url('https://i.ibb.co/NsTxX1G/classic-mac-os-tile-wallpapers-4.png')";
            document.body.style.backgroundSize = "128px";
        }
        if (ibgSelected == "Stars") {
            document.body.style.backgroundImage = "url('https://i.ibb.co/YT66PvK/classic-mac-os-tile-wallpapers-2.png')";
            document.body.style.backgroundSize = "128px";
        }
        if (ibgSelected == "Circut Board") {
            document.body.style.backgroundImage = "url('https://i.ibb.co/f0FSTD4/classic-mac-os-tile-wallpapers-7.png')";
            document.body.style.backgroundSize = "128px";
        }
        if (ibgSelected == "NEW! Purple Lines") {
            document.body.style.backgroundImage = "url('https://i.ibb.co/F4Y8rxD/purplline.jpg')";
            document.body.style.backgroundSize = "300px";
        }
        if (ibgSelected == "NEW! Age Logo") {
            document.body.style.backgroundImage = "url('https://i.ibb.co/n6FVW6V/1999.jpg')";
            document.body.style.backgroundSize = "850px";
        }
    }