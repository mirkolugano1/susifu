$(document).on('ready', function () {	
	setup(true);
	setup(false);
});

function setup(isCurrentMonth) {	
	var now = moment();
	if (!isCurrentMonth) now = now.add(1, 'M');
	var monthNumber = now.format('MM');
	var monthLabel = now.format('MMMM YYYY');
	$('#monthLabel').text(monthLabel);
	
	var weekdays = moment.weekdays();
	var wd1 = weekdays.shift();
	weekdays.push(wd1);
	var daysInMonth = now.daysInMonth();
	var firstDayInMonth = now.startOf('month').format('dddd');
	var dayOfMonth = moment().format('D');
	
	var shouldAddNumber = false;
	var hasWeeks = true;
	var weekNumber = 0;
	var dayNr = 0;
	var calendarDays = [];
	while (hasWeeks) {
		for (var i = 0; i < weekdays.length; i++) {
			var day = weekdays[i];
			var obj = { label: day, weekNumber: weekNumber };
			if (day == firstDayInMonth && dayNr == 0) {
				dayNr = 1;
				obj.number = 1;
				shouldAddNumber = true;				
			} else {				
				if (dayNr > 0 && dayNr < daysInMonth) dayNr++;
				if (dayNr <= daysInMonth && shouldAddNumber) obj.number = dayNr;
				if (dayNr == daysInMonth) shouldAddNumber = false; 				
			}						
			
			if (obj.number) obj.menu = window['menus' + monthNumber][obj.number];
			calendarDays.push(obj);
		}		
		
		if (dayNr == daysInMonth) hasWeeks = false;
		else weekNumber++;
		
		if (weekNumber > 5) return;
	}
	
	var html = '';
	
	html +=
			`
				<div class="monthLabel">${monthLabel}</monthLabel>
				<div class="clear" style="height: 10px"></div>
				<div class="flexContainer top">		
			`;	
			
	for (var i = 0; i < weekdays.length; i++) {
		var wd = weekdays[i];
		var we = wd == 'Saturday' || wd == 'Sunday' ? 'we' : '';
		var last = wd == 'Sunday' ? 'last' : '';
		html +=
			`
				<div class="${we} ${last}">${wd}</div>	
			`;	
	}
	
	html +=
			`
				</div>		
			`;	
	
	for (var i = 0; i < calendarDays.length; i++) {		
		var cday = calendarDays[i];
		var today = cday.number == dayOfMonth && isCurrentMonth ? 'today' : '';
		var menu = cday.menu || '';
		var nr = cday.number || '';
		var we = cday.label == 'Saturday' || cday.label == 'Sunday' ? 'we' : '';
		var last = cday.label == 'Sunday' ? 'last' : '';
		if (cday.label == 'Monday') {
			html +=
			`
				<div class="flexContainer" id="week${i}">			
			`;		
		}
		
		html += `
				<div class="${we} ${last} ${today}">
					<div class="dayContainer">
						<span class="day">${nr}</span>
						<div class="clear"></div>
						<span class="menu">${menu}</span></div>
					</div>			
			`;
		
		
		if (cday.label == 'Sunday') {
			html +=
			`
				</div>				
			`;		
		}
	}

	html += '<div class="clear" style="height: 20px"></div>';

	$(html).appendTo('body');
}