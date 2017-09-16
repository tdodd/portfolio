/**
 * Open and close modals
 */
(() => {

   // Get modal buttons
   const modalButtons = document.querySelectorAll('.timeline-btn');
   const closeButtons = document.querySelectorAll('.close-btn');

   // Page Overlay
   const overlay = document.querySelector('.page-overlay');

   // Modal fade out duration (in ms)
   const fadeOutTime = 350;

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
    * @param {DomNode} button the modal button that was clicked
    */
   function showModal(button) {

      // Show page overlay
      overlay.style.height = getWindowHeight();
      overlay.classList.remove('none');

      // Show Modal
      const id = button.dataset.triggerId;
      const modal = document.querySelector(`#${id}`);
      modal.classList.add('showing', 'fade-in-up');
      modal.classList.remove('none', 'fade-out-down');

   }

   /**
    * Hide a modal dialog
    * @param {DomNode} button the modal button that was clicked
    */
   function closeModal(button) {

      const id = button.dataset.triggerId;
      const modal = document.querySelector(`#${id}`);
      modal.classList.remove('showing', 'fade-in-up');
      modal.classList.add('fade-out-down');
      
      // Hide modal and overlay after delay
      setTimeout(() => {
         overlay.classList.add('none');
         modal.classList.add('none')
      }, fadeOutTime);

   }

   /**
    * Get the height of the entire document
    * @return {string} the document height in pixels
    */
   function getWindowHeight() {
      const body = document.body
      const html = document.documentElement;
      const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      return height.toString() + 'px';
   }

})();