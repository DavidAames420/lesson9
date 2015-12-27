// Using User Data
// Detect the OS that the user is using
// Detect the Browser that the user is using
// Detect the size of the window
// Detect when the user is resizing their browser window
// Do something for each Detection result!
$(document).ready(function(){

    function detectOS(){
        var operatingSystem;
        //if navigator.appVersion.indexOf(" ") does not return -1 then it is true
        //there for the operating system thats being indexed there
        if (navigator.appVersion.indexOf("Win")!=-1){
            operatingSystem = "Windows";
            $('#osImg').append('<img src="./img/win.jpg" />');
        } 
        if (navigator.appVersion.indexOf("Mac")!=-1){
            operatingSystem = "Mac OS";
            $('#osImg').append('<img src="./img/apple.jpg" />');
        } 
        if (navigator.appVersion.indexOf("X11")!=-1){
            operatingSystem = "UNIX";
            $('#osImg').append('<img src="./img/unix.png" />');
        } 
        if (navigator.appVersion.indexOf("Linux")!=-1){
            operatingSystem = "Linux";
            $('#osImg').append('<img src="./img/linux.jpg" />');
        } 
        return operatingSystem;
    }

    function detectBrowserApp(){
        var browserAppName = navigator.appName;

        return browserAppName;
    }

    function detectBrowserAppCode(){
        var broswerAppCode = navigator.appCodeName;

        return broswerAppCode;

    }
    function detectBrowserWidth(){
        var browserWidth = window.outerWidth;

        return browserWidth;
    }
    function detectBrowserHeight(){
        var browserHeight = window.outerHeight;

        return browserHeight;
    }

    $('#detectOS').one('click', function(){
        var currentOS;

        currentOS = detectOS();

        $currentOS = $('#operatingS');

        $currentOS.text(currentOS);

    });

    $('#detectBrowser').one('click', function(){
        var browser = detectBrowserApp(),
            browserApp = detectBrowserAppCode();


        $currentBrowser = $('#browser');

        $currentBrowser.text(browser +' & '+ browserApp);

    });

    $('#browserSize').on('click', function(){
        
        $('#windowSize').text(detectBrowserWidth() +' x '+detectBrowserHeight());

    });

    $(window).resize(function(){
        alert('You Just Resized this Window Bruh!');
        $('#resize').text('Yes!')
    });


});

