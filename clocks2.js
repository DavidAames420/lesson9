function addLeadingZero(baseString, digitCount) {
 	var zeroString = '';
 	for (var i = 0; i < digits - 1; i++) {
 		zeroString += '0';
 	}

 	return (zeroString + baseString).substr(-1 * digits);
 }

 function getTimeDiff(firstDate, secondDate){
 	return new Date(secondDate.getTime() - firstDate.getTime());
 }

 var milliseconds,
     seconds,
     minutes;

 var interval,
     difftime,
     leaderTime = new Date(0);

 var $milliseconds = $('#milliseconds'),
     $seconds = $('#seconds'),
     $minutes = $('#minutes');

 $('.Start').on('click', function(){
 	
 	var initialTime= new Date();

 	interval = window.setInterval(function(){

 	var currentTime = new Date();

 	diffTime = getTimeDiff(initialTime, currentTime)

 	milliseconds = diffTime.getMilliseconds();
 	seconds = diffTime.getSeconds();
 	minutes = diffTime.getMinutes();
 	hours = diffTime.getHours();

 	minutes = addLeadingZero(minutes, 2);
 	seconds = addLeadingZero(seconds, 2);
 	milliseconds = addLeadingZero(milliseconds, 3);

 	$milliseconds.text(milliseconds);
 	$seconds.text(seconds);
 	$minutes.text(minutes);

  }, 100);

$('.Stop').on('click', function(){
	clearInterval(interval);
	if (diffTime.getTime() > leaderTime.getTime()){

	var leaderName = prompt('You Are The Winner!!')
	     leaderTime = diffTime;
	   $('.leader-name').text(leaderName); 	
	};
});	

 	