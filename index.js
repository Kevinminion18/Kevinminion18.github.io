'use strict';
(function() {
  let isOverImage = false;
  window.addEventListener('load', init);

  function init() {
    // Get the elements
    let hoverTarget = document.querySelector('.hover-target');
    let groupImage = id('groupImage');

    hoverTarget.addEventListener('mouseover', function() {
      groupImage.style.display = 'block';
    });

    hoverTarget.addEventListener('mouseout', function(e) {
      // Check if we moved to the image
      if (e.relatedTarget === groupImage) {
        return;
      }
      hideImageWithDelay(groupImage);
    });

    groupImage.addEventListener('mouseover', function() {
      isOverImage = true;
    });

    groupImage.addEventListener('mouseout', function(e) {
      isOverImage = false;
      hideImageWithDelay(groupImage);
    });
  }

  /**
   * A function to return the element that has the ID attribute with the
   * specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }
})();