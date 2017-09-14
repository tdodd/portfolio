/**
 * Profile Picture Animation
 */
(() => {

   // Profile picture
   const profilePicture = document.querySelector('.img-round');

   // Set to true once picture has been animated
   let flag = false;

   // Check on page load
   if (inViewport(profilePicture)) showImage();

   // Check if any elements are in the viewport on scroll
   window.addEventListener('scroll', (event) => {
      if (!flag && inViewport(profilePicture)) showImage();
   });

   /**
    * Animate picture
    */
   function showImage() {
      flag = true;
      profilePicture.classList.add('profile-animation');
   }

})();
