/**
 * Animate grid elements once they are in the viewport
 */
(() => {

	// Get grid elements
	const gridLeft = document.querySelectorAll('.grid-left');
	const gridRight = document.querySelectorAll('.grid-right');

	// Set to true once grid has been animated
	let flag = false;

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
		flag = true;
		for (let i = 0; i < gridLeft.length; i++) gridLeft[i].classList.add('slide-in-left');
		for (let j = 0; j < gridRight.length; j++) gridRight[j].classList.add('slide-in-right');
	}

})();
