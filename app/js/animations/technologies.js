/**
 * Assign card fade-in times
 */
(() => {
   
   const cards = document.querySelectorAll('.grid-item');

   // Set to true once cards have been animated
   let flag = false;

   // Animate in on resize
   window.addEventListener('resize', (event) => {

      if (!flag && checkListInViewport(cards)) {
         showGrid();
      }

   });

   // Check if cards are in the viewport on scroll
   window.addEventListener('scroll', (event) => {

      if (!flag && checkListInViewport(cards)) {
         showGrid();
      }

   });

   /**
    * Display the grid
    */
   function showGrid() {

      flag = true;

      // Loop through cards and add animations
      for (let i = 0; i < cards.length; i++) {

         // Generate random time (in ms) between 0 and 1000
         const rnd = Math.floor(Math.random() * 1000);

         // Delay, then add class
         setTimeout(() => cards[i].classList.add('pop-in'), rnd);

      }

   }

})();