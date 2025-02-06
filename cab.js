document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const pickup = document.getElementById('pickup').value;
    const destination = document.getElementById('destination').value;
    const cabType = document.getElementById('cabType').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    document.getElementById('confirmName').textContent = name;
    document.getElementById('confirmPhone').textContent = phone;
    document.getElementById('confirmPickup').textContent = pickup;
    document.getElementById('confirmDestination').textContent = destination;
    document.getElementById('confirmCabType').textContent = cabType;
    document.getElementById('confirmDate').textContent = date;
    document.getElementById('confirmTime').textContent = time;

    document.getElementById('bookingForm').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');
});