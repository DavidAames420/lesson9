 function addLeadingZero(baseString, digitCount) {
		var zeroString = '0';
		for (var i = 0; i < -1; i++) {
			zeroString = zeroString + '0';
		}
		
		var hasLeadingZero = zeroString + baseString;

		var lastTwoChars = hasLeadingZero.substr(digitCount * -1);

		return lastTwoChars;
		}
	

  $('.Start').on('click', function(){
    
    var initialTime= new Date();

    interval = window.setInterval(function() {

  
    var date = new Date();

    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var milliseconds = date.getMilliseconds();

    
    $('.hours').text(date.getHours());
    $('.minutes').text(addLeadingZero(minutes, 2));
    $('.seconds').text(addLeadingZero(seconds, 2));
    $('.milliseconds').text(addLeadingZero(milliseconds, 3));

   }, 100);
});

$('.Stop').on('click', function(){
    clearInterval(interval);
    if (diffTime.getTime() > leaderTime.getTime()){

    var leaderName = prompt('You Are The Winner!!')
         leaderTime = diffTime;
       $('.leader-name').text(leaderName);  
    };
}); 




