$(function() {

	// you can set the default for 'ofthemonth'
	$.fn.ofthemonth.defaults.next_day = "Monday";
	$.fn.ofthemonth.defaults.next_day_which_week = "first";

	// set variable to recieve new date object
	var target_day = new Date($(this).ofthemonth({next_day:"Thursday",next_day_which_week:"second"}));
	var today = new Date();
	var current_next_day = $.fn.ofthemonth.defaults.next_day;
	var current_next_day_which_week = $.fn.ofthemonth.defaults.next_day_which_week;

	// change day function
	change_day = function (new_day, new_day_which_week) {
		current_next_day = ((new_day !== undefined) ? new_day : current_next_day);
		current_next_day_which_week = ((new_day_which_week !== undefined) ? new_day_which_week : current_next_day_which_week);
		// new date object
		console.log(current_next_day,current_next_day_which_week);
		target_day = $(this).ofthemonth({next_day:current_next_day,next_day_which_week:current_next_day_which_week});
		console.log(target_day);
		$('p span').html(target_day);
		$('p i').html(current_next_day_which_week+' '+current_next_day);
	}

	// do the change day
	change_day();

	// today will not necesarily change
	$('h3 span').html(today);

	// when the selects change
	$('#weekday').on('change', function() {
		change_day($(this).val(),undefined);
	});
	$('#week').on('change', function() {
		change_day(undefined,$(this).val());
	});
});