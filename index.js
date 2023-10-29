'use strict';
(function() {
  window.addEventListener('load', init);

  function init() {
    // Get the elements
    let hoverTarget = document.querySelector('.hover-target');
    let groupImage = document.getElementById('groupImage');
    let isOverImage = false;  // flag to track if we're over the image

    hoverTarget.addEventListener('mouseover', function() {
      groupImage.style.display = 'block';
    });

    hoverTarget.addEventListener('mouseout', function(e) {
      // Check if we moved to the image
      if (e.relatedTarget === groupImage) {
        return;
      }
      hideImageWithDelay();
    });

    groupImage.addEventListener('mouseover', function() {
      isOverImage = true;
    });

    groupImage.addEventListener('mouseout', function(e) {
      isOverImage = false;
      hideImageWithDelay();
    });

    function hideImageWithDelay() {
      // Delay hiding the image to check if we're moving to the other element
      setTimeout(function() {
        if (!isOverImage) {
          groupImage.style.display = 'none';
        }
      }, 1000);
    }
  }
})();