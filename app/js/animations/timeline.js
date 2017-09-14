/**
 * Animate timeline on scroll
 */
(() => {

  // Timeline elements
  const leftItems = document.querySelectorAll('.timeline-content-left');
  const rightItems = document.querySelectorAll('.timeline-content-right');

  // Check timeline elements on page load
  checkTimelineElems();

  // Check viewport width on page load
  if (getViewportWidth() <= 768) displayTimelineElems();

  // Hide elements on resize
  window.onresize = function (event) {
    if (getViewportWidth() <= 768) displayTimelineElems();
  }

  // Show timeline elements when scrolled
  window.addEventListener('scroll', (event) => {
    checkTimelineElems();
  });

  // Utilities

  /**
  * Check all timeline elements to see if they are in the viewport
  */
  function checkTimelineElems() {

    for (var i = 0; i < leftItems.length; i++) {

      if (inViewport(leftItems[i]) && !leftItems[i].classList.contains('showing')) {

        leftItems[i].classList.add('showing');
        showElemLeft(leftItems[i]);

      }

    }

    for (var i = 0; i < rightItems.length; i++) {

      if (inViewport(rightItems[i]) && !rightItems[i].classList.contains('showing')) {

        rightItems[i].classList.add('showing');
        showElemRight(rightItems[i]);

      }

    }

  }

  /**
  * Get the current viewport width
  * @return {float} the current viewport width
  */
  function getViewportWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  /**
  * Animate a timeline item in from the left
  * @param {DomNode} elem the elem to show
  */
  function showElemLeft(elem) {
    elem.classList.remove('hidden');
    elem.classList.add('animate-in-left');
  }

  /**
  * Animate a timeline item in from the right
  * @param {DomNode} elem the elem to show
  */
  function showElemRight(elem) {
    elem.classList.remove('hidden');
    elem.classList.add('animate-in-right');
  }

  /**
  * Show timeline descriptions for large screens
  */
  function displayTimelineElems() {

    for (var i = 0; i < leftItems.length; i++) {
      leftItems[i].classList.remove('hidden');
    }

    for (var i = 0; i < rightItems.length; i++) {
      rightItems[i].classList.remove('hidden');
    }

  }

})();