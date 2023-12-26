document.addEventListener('DOMContentLoaded', function () {
    // Get the element where the countdown will be added
    var countdownContainer = document.getElementById('countdown-container');

    // Create an element for the countdown
    var countdownElement = document.createElement('div');
    countdownElement.id = 'countdown';
    countdownElement.className = 'countdown-box';

    // Set the date for the countdown (15 July 2024)
    var targetDate = new Date('July 15, 2024').getTime();

    // Update the countdown every 1 second
    var countdownInterval = setInterval(function () {
        var currentDate = new Date().getTime();
        var timeRemaining = targetDate - currentDate;

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown
        countdownElement.innerHTML = '<strong>Sınava Kalan Gün:</strong> ' + days + ' Gün ' + hours + ' Saat ' + minutes + ' Dakika ' + seconds + ' Saniye';

        // If the countdown is over, display a message
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = '<strong>Sınav Zamanı Geldi!</strong>';
        }
    }, 1000);

    // Add the countdown element to the container
    countdownContainer.appendChild(countdownElement);
});
