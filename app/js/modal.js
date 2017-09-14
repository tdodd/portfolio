/**
 * Open and close modals
 */

// Get modal buttons
var modalButtons = document.querySelectorAll('.timeline-btn');
var closeButtons = document.querySelectorAll('.close-btn');

// Add click listeners

// Modal open buttons
for (var i = 0; i < modalButtons.length; i++) {
    modalButtons[i].addEventListener('click', function(e) {
        e.preventDefault();
        showModal(e.target);
    });
}

// Modal close buttons
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function(e) {
        e.preventDefault();
        closeModal(e.target);
    });
}

// Utilities

/**
* Show a modal dialog
* @param {DomNode} modal the modal that was triggered 
*/
function showModal(button) {
    var id = button.dataset.triggerId;
    var modal = document.querySelector('#'+ id);
    modal.classList.add('showing');
    modal.classList.remove('none');
}

/**
* Hide a modal dialog
* @param {DomNode} button the button that was clicked
*/
function closeModal(button) {
    var id = button.dataset.triggerId;
    var modal = document.querySelector('#'+ id);
    modal.classList.remove('showing');
    modal.classList.add('none');
}

