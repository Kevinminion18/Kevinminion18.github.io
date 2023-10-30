'use strict';
(function() {
  let isOverImage = false;
  window.addEventListener('load', init);

  function init() {
    // Get the elements
    let hoverTarget = document.querySelector('.hover-target');
    let groupImage = id('groupImage');
    let learnMore = id('learnMoreBtn');

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

    learnMore.addEventListener("click", function() {
      // Show the video container
      id("videoContainer").style.display = "block";

      // Play the video
      let video = id("videoElement");
      video.play();
    });
  }

  function hideImageWithDelay(groupImage) {
    // Delay hiding the image to check if we're moving to the other element
    setTimeout(function() {
        if (!isOverImage) {
            groupImage.style.display = 'none';
        }
    }, 2000);
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