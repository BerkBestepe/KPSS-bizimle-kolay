// Function to generate a calendar for a specific year and month
function generateCalendar(year, month) {
    // Get the element where the calendar will be added
    var calendarContainer = document.getElementById('calendar-container');

    // Create a new tab for the calendar
    var calendarTab = window.open('', '_blank');
    
    // Set the title of the new tab
    calendarTab.document.title = '2024 Takvim';

    // Create a table element for the calendar
    var calendarTable = calendarTab.document.createElement('table');
    calendarTable.className = 'calendar-table';

    // Create the header row for the days of the week
    var headerRow = calendarTable.insertRow(0);
    var daysOfWeek = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

    for (var i = 0; i < daysOfWeek.length; i++) {
        var cell = headerRow.insertCell(i);
        cell.innerHTML = daysOfWeek[i];
    }

    // Get the first day of the month and the number of days in the month
    var firstDay = new Date(year, month - 1, 1);
    var lastDay = new Date(year, month, 0);
    var numDays = lastDay.getDate();

    // Calculate the starting day of the week
    var startDay = firstDay.getDay(); // 0 (Sunday) to 6 (Saturday)

    // Create rows and cells for each day in the month
    var currentDay = 1;

    for (var i = 0; i < 6; i++) {
        var row = calendarTable.insertRow(i + 1);

        for (var j = 0; j < 7; j++) {
            var cell = row.insertCell(j);

            if (i === 0 && j < startDay) {
                // Empty cells before the first day of the month
                cell.innerHTML = '';
            } else if (currentDay <= numDays) {
                // Fill in the cells with the day of the month
                cell.innerHTML = currentDay;
                currentDay++;
            }
        }
    }

    // Append the calendar table to the new tab
    calendarTab.document.body.appendChild(calendarTable);
}

// Example usage: generate a calendar for July 2024
generateCalendar(2024, 7);
