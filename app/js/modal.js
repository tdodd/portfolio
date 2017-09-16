/**
 * Open and close modals
 */
(() => {

   // Get modal buttons
   const modalButtons = document.querySelectorAll('.timeline-btn');
   const closeButtons = document.querySelectorAll('.close-btn');

   // Add click listeners to open buttons
   for (let i = 0; i < modalButtons.length; i++) {
      modalButtons[i].addEventListener('click', (event) => {
         event.preventDefault();
         showModal(event.target);
      });
   }

   //  Add click listeners to close buttons
   for (let i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener('click', (event) => {
         event.preventDefault();
         closeModal(event.target);
      });
   }

   // Utilities

   /**
   * Show a modal dialog
   * @param {DomNode} button the modal that was triggered 
   */
   function showModal(button) {
      const id = button.dataset.triggerId;
      const modal = document.querySelector(`#${id}`);
      modal.classList.add('showing');
      modal.classList.remove('none');
   }

   /**
   * Hide a modal dialog
   * @param {DomNode} button the modal button that was clicked
   */
   function closeModal(button) {
      const id = button.dataset.triggerId;
      const modal = document.querySelector(`#${id}`);
      modal.classList.remove('showing');
      modal.classList.add('none');
   }

})();