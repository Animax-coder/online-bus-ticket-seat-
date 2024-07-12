document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.querySelector('#name').value;
        if (name.trim() === '') {
            alert('Name is required!');
            event.preventDefault();
        }
    });
});
