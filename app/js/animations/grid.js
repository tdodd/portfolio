/**
 * Animate grid elements once they are in the viewport
 */
(() => {

	// Get grid elements
	const gridLeft = document.querySelectorAll('.grid-left');
	const gridRight = document.querySelectorAll('.grid-right');

	// Set to true once grid has been animated
	let flag = false;

	// Check on page load
	if (checkListInViewport(gridLeft) || checkListInViewport(gridRight)) {
		showGrid();
	}

	// Check if any elements are in the viewport on scroll
	window.addEventListener('scroll', (event) => {

		if (!flag && (checkListInViewport(gridLeft) || checkListInViewport(gridRight))) {
			showGrid();
		}

	});

	/**
	 * Animate the Grid
	 */
	function showGrid() {

      flag = true; // Set flag

      // Animate left side
      for (let i = 0; i < gridLeft.length; i++) {
         gridLeft[i].classList.add('slide-in-left');
      }
      
      // Animate right side
      for (let j = 0; j < gridRight.length; j++) {
         gridRight[j].classList.add('slide-in-right');
      }
   
   }

})();
