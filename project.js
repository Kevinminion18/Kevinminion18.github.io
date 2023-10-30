'use strict';
(function() {
  window.addEventListener('load', init);

  function init() {
    // Get the elements
    let learnMore = id('learnMoreBtn');

    learnMore.addEventListener("click", function() {
      // Show the video container
      console.log("Button clicked");
      id("videoContainer").style.display = "block";

      // Play the video
      let video = id("videoElement");
      video.play();
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