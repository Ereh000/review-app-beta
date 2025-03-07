// Grab elements
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownLabel = document.getElementById('dropdownLabel');
const caretIcon = dropdownButton.querySelector('.caret');
const items = dropdownMenu.querySelectorAll('.dropdown-item');

// Toggle dropdown on button click
dropdownButton.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent click event from bubbling to document
    dropdownMenu.classList.toggle('show');
    caretIcon.classList.toggle('open');
});

// Close dropdown if clicking outside of it
document.addEventListener('click', function () {
    dropdownMenu.classList.remove('show');
    caretIcon.classList.remove('open');
});

// Close dropdown if user presses ESC key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        dropdownMenu.classList.remove('show');
        caretIcon.classList.remove('open');
    }
});

// Handle item selection
items.forEach((item) => {
    item.addEventListener('click', function (event) {
        event.stopPropagation(); // Keep click from closing dropdown before we handle it

        // Remove "active" from all items
        items.forEach((i) => i.classList.remove('active'));
        // Hide checkmark from all items
        items.forEach((i) => {
            const check = i.querySelector('.checkmark');
            if (check) check.remove();
        });

        // Mark the clicked item as active
        item.classList.add('active');
        // Add checkmark to the clicked item
        const checkmarkSpan = document.createElement('span');
        checkmarkSpan.classList.add('checkmark');
        checkmarkSpan.textContent = '✔';
        item.appendChild(checkmarkSpan);

        // Update the label on the button
        dropdownLabel.textContent = item.innerText.replace('✔', '').trim();

        // Close the dropdown
        dropdownMenu.classList.remove('show');
        caretIcon.classList.remove('open');
    });
});

// WRite Reveiw Popup ----------------------------------------------

const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');

// Open modal on "Write a review" button click
openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('show');
});

// Close modal when back arrow is clicked
backButton.addEventListener('click', () => {
    modalOverlay.classList.remove('show');
});

// For demonstration, the Next button just closes the modal
// (In a real app, you might go to the next step or something else)
// nextButton.addEventListener('click', () => {
//     alert('Next step clicked!');
//     modalOverlay.classList.remove('show');
// });

// Close modal if user clicks outside the modal
modalOverlay.addEventListener('click', (e) => {
    // If the click is on the overlay (not the modal content), close the modal
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('show');
    }
});
