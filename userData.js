
$(document).ready(function(){

    function detectOS(){
        var operatingSystem;
        
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
        alert('Window Resized!');
        $('#resize').text('Yes!')
    });


});

