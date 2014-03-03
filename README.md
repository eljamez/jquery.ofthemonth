# jquery.ofthemonth

### A jQuery plugin that returns the js date object of the next specific day (of your choosing) of the month.

This plugin is most useful if you are looking to retreive a specific day of the month in the immediate future. For example, let's say you would like to get the js date object for the "next" Last Friday relitave to today's date. That is exactly what this plugin does. You can get the First, Second, Third, Fourth, Second to Last, or Last upcoming specific weekday, either in the current month or next (depending on what you are looking for).

## Usage

1. Include jQuery and Plugin

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	<script src="js/jquery.ofthemonth.js"></script>
	```

2. Call the plugin from your JavaScript

	```javascript
	// default setting will return the last friday
	$(this).ofthemonth();

	// but you can change that by adding new defaults, like this
	$.fn.ofthemonth.defaults.which_day = "Sunday";
	$.fn.ofthemonth.defaults.which_week = "first";

	// or just set the variables when calling the plugin
	$(this).ofthemonth({which_day:"Tuesday",which_week:"second"}));

	// I like to set the new date object returned by the plugin to a variable

	var myDate = $(this).ofthemonth();
	```

## Parameters

The Plugin accepts the following values, which are case sensitive.

#### which_day
* Sunday
* Monday
* Tuesday
* Wednesday
* Thursday
* Friday
* Saturday

#### which_week
* first
* second
* third
* fourth
* second_to_last
* last

There you have it, You have a nice and neat date object.

For formatting this date I really like <a href="http://momentjs.com/">Moment.js</a>.

<!--## demo
<a href="http://eljamez.com/plugins/ofthemonth">View the live demo.</a>-->
