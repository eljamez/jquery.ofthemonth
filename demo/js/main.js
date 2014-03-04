$(function() {

	// you can set the default for 'ofthemonth'
	$.fn.ofthemonth.defaults.whichDay = "Sunday";
	$.fn.ofthemonth.defaults.whichWeek = "first";

	console.log('yo '+$(this).ofthemonth({whichDay:"Tuesday",whichWeek:"second"}));

	// set variable to recieve new date object
	var targetDay = $(this).ofthemonth({whichDay:"Thursday",whichWeek:"second"});
	var currentNextDay = $.fn.ofthemonth.defaults.whichDay;
	var currentNextDayWhichWeek = $.fn.ofthemonth.defaults.whichWeek;

	// change day function
	changeDay = function (newDay, newDayWhichWeek) {
		currentNextDay = ((newDay !== undefined) ? newDay : currentNextDay);
		currentNextDayWhichWeek = ((newDayWhichWeek !== undefined) ? newDayWhichWeek : currentNextDayWhichWeek);
		// new date object
		console.log(currentNextDay,currentNextDayWhichWeek);
		targetDay = $(this).ofthemonth({whichDay:currentNextDay,whichWeek:currentNextDayWhichWeek});
		console.log(targetDay);
		$('.display-the-returned-date span').html(targetDay);
		$('.display-the-returned-date i').html(currentNextDayWhichWeek+' '+currentNextDay);
	}

	// do the change day
	changeDay();

	// when the selects change
	$('#weekday').on('change', function() {
		changeDay($(this).val(),undefined);
	});
	$('#week').on('change', function() {
		changeDay(undefined,$(this).val());
	});
});