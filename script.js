document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const confirmationMessage = `Appointment booked successfully!<br>
                                 Name: ${name}<br>
                                 Email: ${email}<br>
                                 Date: ${date}<br>
                                 Time: ${time}`;

    document.getElementById('confirmationMessage').innerHTML = confirmationMessage;
    
    // Reset the form
    document.getElementById('bookingForm').reset();
});
