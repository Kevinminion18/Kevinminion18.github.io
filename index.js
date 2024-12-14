'use strict';
(function() {
  window.addEventListener('load', init);

  function init() {
    // Adjust line height dynamically to connect circles
    updateLineHeight();
    // Update line when window is resized to maintain the layout
    window.addEventListener('resize', updateLineHeight);
  }

  function updateLineHeight() {
    const timelines = document.querySelectorAll('.timeline'); // Assumes multiple timeline elements
    timelines.forEach((timeline, index) => {
      if (index < timelines.length - 1) { // Ensures there is a next timeline to connect to
        const currentCircle = timeline.querySelector('.circle');
        const nextTimeline = timelines[index + 1];
        const nextCircle = nextTimeline.querySelector('.circle');
        const line = timeline.querySelector('.line');

        if (currentCircle && nextCircle && line) {
          const currentRect = currentCircle.getBoundingClientRect();
          const nextRect = nextCircle.getBoundingClientRect();

          // Calculate new height of the line
          const newHeight = nextRect.top - currentRect.top;
          line.style.height = `${newHeight}px`;
          line.style.top = `${currentRect.height / 2}px`; // Adjusts starting position to middle of circle
        }
      }
    });
  }
})();