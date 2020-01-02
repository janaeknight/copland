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

    // Timeout (3 minutes)

    function onInactive(ms, cb) {

        var wait = setTimeout(cb, ms);

        document.onmousemove = document.mousedown = document.mouseup = document.onkeydown = document.onkeyup = document.focus = function () {
            clearTimeout(wait);
            wait = setTimeout(cb, ms);

            document.querySelector("#screensaver").style.display = "none";
            document.querySelector(".desktop").style.display = "flex";
            document.querySelector(".taskbar").style.display = "flex";
        };
    }
    onInactive(180000, function () {
        console.log('Screensaver activated. (3 minutes)');
        document.querySelector(".desktop").style.display = "none";
        document.querySelector(".taskbar").style.display = "none";
        document.querySelector("#screensaver").style.display = "block";
    });


// Close All Windows

    document.getElementById("ts-4").addEventListener("click", closeWindows);
    function closeWindows() {
        $('.window').hide();
        console.log("All active windows have been closed.");
    };

// Close (this) Window

    document.querySelectorAll(".closeWin").forEach(function(a) { a.addEventListener("click", closeThisWin)});

    function closeThisWin() {
        let winToClose = this.parentElement.parentElement;
        winToClose.style.display = "none";
    };


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

// Window UI

    $(".window").addClass("ui-widget-content"); // <-- drag class (REQ.)
    $(function() { $(".window").draggable(); }); // <!--- makes windows draggable


// Taskbar Tab Functions

    document.getElementById("ta-1").addEventListener("click", function(){ 
        $("#aboutComputerTerm").show();
        $("#aboutComputerTerm").addClass("activeZ");
    });
    /*document.getElementById("").addEventListener("click", function(){ 
        document.getElementById("").style.display = "block";
    });
    document.getElementById("").addEventListener("click", function(){ 
        document.getElementById("").style.display = "block";
    });*/


// Desktop Tab Functions

    document.getElementById("dt-8").addEventListener("dblclick", function(){ 
        $("#themeTerm").show();
        $("#themeTerm").addClass("activeZ");
    });
    document.getElementById("dt-9").addEventListener("dblclick", function(){ 
        $("#romeoTerm").show();
        $("#romeoTerm").addClass("activeZ");
    });
    document.getElementById("dt-10").addEventListener("dblclick", function(){ 
        $("#winonaTerm").show();
        $("#winonaTerm").addClass("activeZ");
    });
    document.getElementById("dt-7").addEventListener("dblclick", function(){ 
        $("#fortuneTerm").show();
        $("#fortuneTerm").addClass("activeZ");
    });

    // on .window click, add class for z index to raise 4444 (activeZ) on (this)

    $(".window").on( "click", function() {
        $(".window").removeClass("activeZ");
        $(this).addClass("activeZ");
        // functional, but nonActiveZ window layers stack in html order
    });




// CREDITS

    /*

    👏 http://osxdaily.com/2018/01/01/classic-mac-os-tiling-wallpapers/, classic wallpapers
    👏🏻 http://www.iconarchive.com/artist/iconfactory.html, pseudo os icons
    👏🏿 https://stackoverflow.com/questions/24338450/how-to-detect-user-inactivity-with-javascript, imbondbaby -- timeout function


    */


// IMPORTANT LINKS

    /*

    🔗 https://ibb.co/album/mrzrva, copland os wallpaper arch.

    */




// THEMES

    // On Theme (left) button click, hide all divs (right)

    $(".thOBtn").on( "click", function() {
        $(".thOA").hide();
    });

        // And show this

        $("#thOBgs").on( "click", function() {
            $(".backgroundArticle").show();
        });
        $("#thOFonts").on( "click", function() {
            $(".fontArticle").show();
        });
        $("#thOWindows").on( "click", function() {
            $(".windowsArticle").show();
        });
        $("#thOSavers").on( "click", function() {
            $(".screensaversArticle").show();
        });

    // BG PAGE SELECT

    $("#bgPgBtn").on( "click", function() {

        let bgPgSel = $("#themeBgPgSel option:selected").text();

        if (bgPgSel === "Color Backgrounds") {
            $('.bgP2').hide(); $('.bgP3').hide();
            $('.bgP1').show();
        };
        if (bgPgSel === "Image Backgrounds") {
            $('.bgP1').hide(); $('.bgP3').hide();
            $('.bgP2').show();
        };
        if (bgPgSel === "Custom Backgrounds") {
            $('.bgP1').hide(); $('.bgP2').hide();
            $('.bgP3').show();
        };
    
    });


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

    // -- // CUSTOM BGS

    $("#bgcCourage").on( "click", function() {
        $("#bgcCourage").addClass("bgSelectedOption");
        document.body.style.backgroundImage = "url('https://i.ibb.co/SdnwDVM/courage.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    });
    $("#bgcGoals").on( "click", function() {
        $("#bgcGoals").addClass("bgSelectedOption");
        document.body.style.backgroundImage = "url('https://i.ibb.co/0Y6VkCH/goals.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    });
    $("#bgcMario").on( "click", function() {
        $("#bgcMario").addClass("bgSelectedOption");
        document.body.style.backgroundImage = "url('https://i.ibb.co/b1MqDq3/mario.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    });
    $("#bgcSub").on( "click", function() {
        $("#bgcSub").addClass("bgSelectedOption");
        document.body.style.backgroundImage = "url('https://i.ibb.co/r4CSH5D/submarine.png')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    });
    $("#bgcEarth").on( "click", function() {
        $("#bgcEarth").addClass("bgSelectedOption");
        document.body.style.backgroundImage = "url('https://i.ibb.co/mSbndcV/earth.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    });
    $("#bgcCher").on( "click", function() {
        $("#bgcCher").addClass("bgSelectedOption");
        document.body.style.backgroundImage = "url('https://i.ibb.co/qgkjTbq/cher.jpg')";
        document.body.style.backgroundSize = "auto";
    });
    $("#bgcJur").on( "click", function() {
        $("#bgcJur").addClass("bgSelectedOption");
        document.body.style.backgroundImage = "url('https://i.ibb.co/18b0pVz/jurassic.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    });

    // -------------> add highlight to article buttons on click


// DAILY FORTUNE

var possibleFortunes = [
    "Your trouble will pass away soon.", "Be unconventional, even visionary.", "Don't count your chickens before they hatch.", "Anyone can hold the helm when the sea is calm.", "The mistakes of your past form the roots of the wisdom of you future.", "Dream of tomorrow, live in the now.", "You can't overcome fear by thinking about it.", "Life, death, balance.", "Some get wiser with age, some get richer, but everybody gets older.", "If you don't know, listen to those who do.", "Don't look a gift horse in the mouth.", "The fortune you seek is in another cookie.", "Sane is boring.", "Congratulations!", "You can have great success being a total idiot.", "Look for a needle in your haystack.", "When nothing goes right, go left.", "The answer is: A traffic light.", "Each day provides its own gifts.", "Questions travel far.", "Three can keep a secret if you get rid of two.", "It’s just a bad day, not a bad life.", "Don't get in cars with strangers.", "Feel the fear and do it anyway.", "You will die at an Arby's in Columbus Ohio.", "Don’t be humble, you’re not that great.", "Avoid highways.", "Try again, fail again, fail better.", "Throw kindness around like confetti.", "Seek the seeker.", "Truth sets us free.", "Happiness looks gorgeous on you.", "You can do it.", "Happy birthday you magnificent person!", "When you squeeze an orange, orange juice comes out- because that's what's inside.", "You are somebody’s reason to smile.", "Enjoy the little things.", "Silence is an answer too.", "Find what you love and let it kill you.", "Welcome change.", "A smooth sea never made a skillful sailor.", "You will soon witness a miracle.", "Distance yourself from the vain.", "Whenever you feel the glass is half empty, add vodka and stir.", "Be kind to unkind people, they need it the most.", "About time I got out of that cookie.", "It is better to deal with problems before they arise.", "If you think we're going to sum up you whole life in this cookie, you're crazy.", "Enjoy yourself while you can.", "Ignore previous cookie.", "Miles are covered one step at a time.", "Behind you!", "I cannot help you, for I am just a cookie.", "Jealousy closes doors.", "It's better to be alone sometimes.", "Your fortune is as sweet as a cookie.", "Brevity is the soul of wit.", "You will take a chance in something in near future.", "There is money in your future. It is not yours.", "Your talents will be recognized and suitably rewarded.", "If you're reading this, you are not illiterate.", "You cannot love life until you live the life you love.", "Long life is in store for you.", "If you can't walk, try running.", "Good things take time.", "Go where there is no path and leave a trail.", "Please all, and you will please none.", "Don't do drugs.", "Do more of what matters.", "Borrow money from a pessimist- they don't expect it back.", "Smile, it’s free therapy.", "Freedom lies in being bold.", "Feed your dog today.", "Most of the things you worry about never happen.", "No act of kindness, no matter how small, is ever wasted.", "When hungry, order more Chinese food.", "You have an unusual equipment for success, use it properly.", "Courtesy is contagious.", "You look pretty.", "Happiness lies in perspective.", "Ask not what your fortune cookie can do for you, but what you can do for your fortune cookie.", "You are about to become 1 fortune cookie poorer.", "A new voyage will fill your life with untold memories.", "18,000 children starve to death every day. They would have loved thi cookie.", "It's amazing how much good you can do if you dont care who gets the credit.", "Hard work pays off in the future, laziness pays off now.", "If you think nobody cares if you are alive, try missing a couple of car payments.", "Catch on fire with enthusiasm and people will come for miles to watch you burn.", "There is no angry way to say bubbles.", "Everyone agrees. You're the best.", "The numbers below mean absolutely nothing.", "Your mind is your greatest asset.", "This cookie is never gonna give you up, never gonna let you down.", "Your pet is planning to eat you.", "A good way to keep healthy is to eat more Chinese food.", "Love is on the horizon. The stars predict he will be tall, dark, and a centaur.", "You will enjoy good health.", "That wasn't a chicken.", "Avoid taking unnecessary gambles.", "You are about to finish reading a fortune cookie.", "You laugh now, wait till you get home.", "You are agreeing to the use of cookies.", "Looking for answers?", "If you can't find the path that leads to success simply create the path yourself."
]
var possibleLuckies = [
    "19, 75", "41, 71", "22, 24", "60, 42", "94, 70", "30, 51", "19, 51", "65, 66", "93, 82", "27, 4", "82, 39", "23, 3", "94, 6", "16, 98", "40, 28", "25, 45", "99, 37", "91, 76", "93, 71", "3, 31", "15, 55", "72, 68", "10, 92", "39, 9", "72, 19", "76, 67", "39, 33", "38, 22", "48, 2", "26, 31", "80, 36", "28, 69", "6, 78", "30, 24", "41, 91", "64, 45", "38, 37", "66, 65", "66, 19", "41, 84", "99, 59", "68, 84", "15, 69", "64, 21", "42, 89", "12, 33", "27, 99", "46, 67", "7, 63", "59, 66", "9, 51", "15, 33", "45, 21", "86, 94", "64, 81", "24, 92", "78, 27", "62, 30", "27, 26", "14, 46", "77, 96", "44, 7", "100, 49", "4, 84", "11, 93", "2, 62", "58, 12", "65, 88", "49, 70", "80, 74", "79, 92", "22, 28", "40, 53", "57, 99", "92, 74", "16, 67", "69, 7", "94, 76", "72, 50", "85, 58", "66, 47", "77, 18", "31, 88", "97, 77", "41, 45", "50, 24", "40, 62", "80, 100", "60, 49", "6, 55", "90, 57", "11, 86", "41, 3", "63, 80", "82, 55", "35, 97", "77, 65", "44, 47", "79, 49", "96, 32", "54, 31", "97, 11", "74, 97", "84, 59", "71, 21", "41, 46", "67, 78", "13, 13", "31, 87", "75, 21", "90, 97", "48, 78", "28, 92", "54, 27", "21, 5", "8, 19", "29, 75", "16, 15", "35, 16", "20, 43", "36, 64", "53, 50", "14, 35", "33, 37", "67, 77", "80, 6", "91, 25", "73, 29", "86, 32", "19, 29", "93, 68", "86, 38", "45, 65", "8, 73", "75, 19", "98, 15", "58, 47", "6, 24", "52, 88", "47, 99", "16, 63", "94, 53", "79, 35", "42, 96", "80, 29", "2, 94", "73, 91", "67, 78", "52, 51", "75, 39", "67, 89", "82, 47", "20, 90", "7, 76", "85, 10", "81, 25", "32, 56", "99, 47", "42, 62", "84, 58", "29, 36", "43, 49", "1, 78", "64, 67", "46, 28", "17, 65", "67, 79", "52, 77", "44, 45", "23, 94", "35, 15", "19, 23", "23, 12", "90, 33", "38, 37", "87, 99", "11, 10", "95, 88", "25, 100", "95, 22", "29, 48", "34, 59", "65, 13", "13, 2", "82, 64", "44, 90", "96, 93", "55, 90", "71, 25", "21, 46", "42, 50", "61, 48", "96, 93", "85, 76", "86, 19", "50, 31", "60, 16", "62, 44", "77, 45", "35, 78"
]

let fortune = 0;
var todayFortune = possibleFortunes[Math.floor(Math.random()*possibleFortunes.length)];
var todayLuckies = possibleLuckies[Math.floor(Math.random()*possibleLuckies.length)];

document.getElementById("getFortuneBtn").addEventListener("click", function(){
    if (fortune>0) {
        $(".fortunePg1").hide();
        $(".fortunePg2").show();
        console.log(fortune);
    } else {
        $(".fortunePg1").hide();
        $(".fortunePg2").show();
        $(".preCookie").show().delay(6500).queue(function (next) {
            $(this).hide();
            function next() {
                $(".postCookie").show();
            };
            next();
        });
        document.getElementById("getFortuneBtn").innerHTML = "« Today's Fortune »"
        fortune += 1;
        console.log(fortune);
    };
    console.log("Today's Fortune: " +todayFortune);
    console.log("Today's Lucky Numbers: " +todayLuckies);
});

document.getElementById("todaysCookie").innerHTML = todayFortune;
document.getElementById("todaysLuckies").innerHTML = "Lucky Numbers:  " +todayLuckies;

$("#fortuneB2M").on( "click", function() {
    $(".fortunePg2").hide();
    $(".fortunePg1").show();
});

