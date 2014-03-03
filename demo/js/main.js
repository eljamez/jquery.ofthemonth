$(function() {

	// you can set the default for 'ofthemonth'
	$.fn.ofthemonth.defaults.which_day = "Sunday";
	$.fn.ofthemonth.defaults.which_week = "first";

	console.log('yo '+$(this).ofthemonth({which_day:"Tuesday",which_week:"second"}));

	// set variable to recieve new date object
	var target_day = $(this).ofthemonth({which_day:"Thursday",which_week:"second"});
	var current_next_day = $.fn.ofthemonth.defaults.which_day;
	var current_next_day_which_week = $.fn.ofthemonth.defaults.which_week;

	// change day function
	change_day = function (new_day, new_day_which_week) {
		current_next_day = ((new_day !== undefined) ? new_day : current_next_day);
		current_next_day_which_week = ((new_day_which_week !== undefined) ? new_day_which_week : current_next_day_which_week);
		// new date object
		console.log(current_next_day,current_next_day_which_week);
		target_day = $(this).ofthemonth({which_day:current_next_day,which_week:current_next_day_which_week});
		console.log(target_day);
		$('.display-the-returned-date span').html(target_day);
		$('.display-the-returned-date i').html(current_next_day_which_week+' '+current_next_day);
	}

	// do the change day
	change_day();

	// when the selects change
	$('#weekday').on('change', function() {
		change_day($(this).val(),undefined);
	});
	$('#week').on('change', function() {
		change_day(undefined,$(this).val());
	});
});