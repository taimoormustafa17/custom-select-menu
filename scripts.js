// Function to toggle dropdown visibility and update selected item
document.querySelectorAll('.custom-dropdown-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        var dropdown = this.nextElementSibling;
        dropdown.classList.toggle('active');
    });
});

// Function to handle item selection and update label and input
document.querySelectorAll('.custom-dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
        var input = this.closest('.custom-dropdown').querySelector('.dropdown-input');
        var label = this.closest('.custom-dropdown').querySelector('.dropdown-label');
        input.value = this.innerText;
        label.innerText = this.innerText;
        var dropdown = this.closest('.custom-dropdown-menu');
        dropdown.classList.remove('active');
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    document.querySelectorAll('.custom-dropdown').forEach(group => {
        if (!group.contains(event.target)) {
            var dropdown = group.querySelector('.custom-dropdown-menu');
            dropdown.classList.remove('active');
        }
    });
});