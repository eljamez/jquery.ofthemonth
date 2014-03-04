/*
 * jquery.ofthemonth.js
 * A plugin that returns the date object of a specific upsoming date
 * Author: @eljamez, eljamez.com
 * Version: 1.0, March 3rd, 2014
 */

/*global $ */

(function ($) {
  $.fn.ofthemonth = function (options) {
    // get the options
    var opts = $.extend({}, $.fn.ofthemonth.defaults, options),
          weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          today = new Date(),
          firstDayOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1),
          lastDayOfThisMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0),
          firstDayOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1),
          lastDayOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0),
          targetDate = new Date(),
          thisMonth = today.getMonth(),
          nextMonth = targetDate.getMonth() + 1,
          weekdaysOfThisMonth = [],
          weekdaysOfNextMonth = [],
          thisMonthTargetDate = new Date(),
          nextMonthTargetDate = new Date();
    // Loop through this month, fill weekdays array
    for (var d = firstDayOfThisMonth; d <= lastDayOfThisMonth; d.setDate(d.getDate() + 1)) {
      if (d < today) {
        if(weekday[d.getDay()] == opts.whichDay) {
          weekdaysOfThisMonth.push(new Date(d));
        }
      } else {
        if (weekday[d.getDay()] == opts.whichDay) {
          weekdaysOfThisMonth.push(new Date(d));
        }
      }
    }
    // Loop through next month, fill weekdays array
    for (var d = firstDayOfNextMonth; d <= lastDayOfNextMonth; d.setDate(d.getDate() + 1)) {
      if (weekday[d.getDay()] == opts.whichDay) {
        weekdaysOfNextMonth.push(new Date(d));
      }
    }
    // which week of the month
    switch (opts.whichWeek) {
      case 'first' :
        thisMonthTargetDate = weekdaysOfThisMonth[0];
        nextMonthTargetDate = weekdaysOfNextMonth[0];
        break;
      case 'second' :
        thisMonthTargetDate = weekdaysOfThisMonth[1];
        nextMonthTargetDate = weekdaysOfNextMonth[1];
        break;
      case 'third' :
        thisMonthTargetDate = weekdaysOfThisMonth[2];
        nextMonthTargetDate = weekdaysOfNextMonth[2];
        break;
      case 'fourth' :
        thisMonthTargetDate = weekdaysOfThisMonth[3];
        nextMonthTargetDate = weekdaysOfNextMonth[3];
        break;
      case 'second_to_last' :
        thisMonthTargetDate = weekdaysOfThisMonth[weekdaysOfThisMonth.length - 2];
        nextMonthTargetDate = weekdaysOfNextMonth[weekdaysOfNextMonth.length - 2];
        break;
      case 'last' :
        thisMonthTargetDate = weekdaysOfThisMonth[weekdaysOfThisMonth.length - 1];
        nextMonthTargetDate = weekdaysOfNextMonth[weekdaysOfNextMonth.length - 1];
        break;
      default :
        thisMonthTargetDate = weekdaysOfThisMonth[weekdaysOfThisMonth.length - 1];
        nextMonthTargetDate = weekdaysOfNextMonth[weekdaysOfNextMonth.length - 1];
    }
    // check to see if we hit it this month or next
    if (thisMonthTargetDate > today) {
      targetDate = thisMonthTargetDate;
    } else {
      targetDate = nextMonthTargetDate;
    }
    // is it today?
    if (thisMonthTargetDate.getDay() == today.getDay() && thisMonthTargetDate.getDate() == today.getDate()) {
      targetDate = today;
    }
    return targetDate;
  };
})( jQuery );

// defaults set so users can update
$.fn.ofthemonth.defaults = {
  whichDay: 'Friday', //Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
  whichWeek: 'last' // first, second, second_to_last, last
};