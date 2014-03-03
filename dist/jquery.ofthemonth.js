/*!
 * jquery.ofthemonth.js
 * Author: @eljamez
 */

(function($){
  $.fn.ofthemonth = function(options){

    // get the options
    var opts = $.extend( {}, $.fn.ofthemonth.defaults, options ),
          // weekday array
          weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
          month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          // get today's date
          today = new Date(),
          first_day_of_this_month = new Date(today.getFullYear(), today.getMonth(), 1),
          last_day_of_this_month = new Date(today.getFullYear(), today.getMonth() + 1, 0),
          first_day_of_next_month = new Date(today.getFullYear(), today.getMonth() + 1, 1),
          last_day_of_next_month = new Date(today.getFullYear(), today.getMonth() + 2, 0),
          // next date we want to return
          target_date = new Date(),
          // look for next month
          this_month = today.getMonth();
          next_month = target_date.getMonth()+1,
          weekdaysOfThisMonth = [],
          weekdaysOfNextMonth = [],
          this_month_target_date = new Date();
          next_month_target_date = new Date();

    // Loop through this month, fill weekdays array
    for (var d = first_day_of_this_month; d <= last_day_of_this_month; d.setDate(d.getDate() + 1)) {
      if(d < today) {
        if(weekday[d.getDay()] == opts.which_day) {
          weekdaysOfThisMonth.push(new Date(d));
        }
      } else {
        if(weekday[d.getDay()] == opts.which_day) {
          weekdaysOfThisMonth.push(new Date(d));
        }
      }
    }

    // Loop through next month, fill weekdays array
    for (var d = first_day_of_next_month; d <= last_day_of_next_month; d.setDate(d.getDate() + 1)) {
      if(weekday[d.getDay()] == opts.which_day) {
        weekdaysOfNextMonth.push(new Date(d));
      }
    }
    
    // which week of the month
    switch(opts.which_week) {
      case 'first' :
        this_month_target_date = weekdaysOfThisMonth[0];
        next_month_target_date = weekdaysOfNextMonth[0];
        break;
      case 'second' :
        this_month_target_date = weekdaysOfThisMonth[1];
        next_month_target_date = weekdaysOfNextMonth[1];
        break;
      case 'third' :
        this_month_target_date = weekdaysOfThisMonth[2];
        next_month_target_date = weekdaysOfNextMonth[2];
        break;
      case 'fourth' :
        this_month_target_date = weekdaysOfThisMonth[3];
        next_month_target_date = weekdaysOfNextMonth[3];
        break;
      case 'second_to_last' :
        this_month_target_date = weekdaysOfThisMonth[weekdaysOfThisMonth.length - 2];
        next_month_target_date = weekdaysOfNextMonth[weekdaysOfNextMonth.length - 2];
        break;
      case 'last' :
        this_month_target_date = weekdaysOfThisMonth[weekdaysOfThisMonth.length - 1];
        next_month_target_date = weekdaysOfNextMonth[weekdaysOfNextMonth.length - 1];
        break;
      default :
        this_month_target_date = weekdaysOfThisMonth[weekdaysOfThisMonth.length - 1];
        next_month_target_date = weekdaysOfNextMonth[weekdaysOfNextMonth.length - 1];
    }

    // check to see if we hit it this month or next
    if(this_month_target_date > today) {
      target_date = this_month_target_date;
    } else {
      target_date = next_month_target_date;
    }

    // is it today?
    if(this_month_target_date.getDay() == today.getDay() && this_month_target_date.getDate() == today.getDate()) {
      target_date = today;
    }

    return target_date;
  };
})( jQuery );

// defaults set so users can update
$.fn.ofthemonth.defaults = {
  which_day: 'Friday', //Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
  which_week: 'last' // first, second, second_to_last, last
};