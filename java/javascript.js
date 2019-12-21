// document.getElementById("...").addEventListener("click", myFunction);

document.body.style.backgroundImage = "url('https://i.ibb.co/KbJQ1bQ/1999.jpg')";
document.body.style.backgroundSize = "850px";

// 128 for classic repeat
// 300px for purple static
// 850px for 1999




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












// CREDITS

    /*

    👏 http://osxdaily.com/2018/01/01/classic-mac-os-tiling-wallpapers/, classic wallpapers
    👏 http://www.iconarchive.com/artist/iconfactory.html, pseudo os icons


    */


// IMPORTANT LINKS

    /*

    🔗 https://ibb.co/album/mrzrva, copland os wallpaper arch.


    */