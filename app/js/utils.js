//-----------------------------------------------------
// Utility functions used by other js files
//-----------------------------------------------------


/**
 * Get the current viewport width
 * @return {number} the current viewport width
 */
function getViewportWidth() {
   return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

/**
 * Loops through a list of elements to see if any are in the viewport
 * @param {array} list an array of DomNodes
 * @return {bool} true if an element is in the viewport and false otherwise
 */
function checkListInViewport(list) {

   for (let i = 0; i < list.length; i++) {
      if (inViewport(list[i])) {
         return true;
      }
   }

   return false;

}

/**
 * Checks if a given element is completely in the viewport
 * @param {domNode} elem The element to check
 * @return {bool} true if the element is in the viewport and false otherwise
 */
function inViewport(elem) {

   let top = elem.offsetTop;
   let left = elem.offsetLeft;
   let width = elem.offsetWidth;
   let height = elem.offsetHeight;

   while (elem.offsetParent) {
      elem = elem.offsetParent;
      top += elem.offsetTop;
      left += elem.offsetLeft;
   }

   return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
   );

}