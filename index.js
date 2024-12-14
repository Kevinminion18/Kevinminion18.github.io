'use strict';
(function() {
  window.addEventListener('load', init);

  function init() {
    updateLines();
    window.addEventListener('resize', updateLines); // Adjust lines on resize
  }

  /**
   * This function updates the length and position of each line in the timeline.
   */
  function updateLines() {
    let timelines = document.querySelectorAll('.timeline'); // Get all timelines

    timelines.forEach((timeline, index) => {
      if (index < timelines.length - 1) { // Check if not the last timeline element
        const currentCircle = timeline.querySelector('.circle');
        const nextCircle = timelines[index + 1].querySelector('.circle');
        const line = timeline.querySelector('.line');

        if (line) {
          adjustLine(currentCircle, nextCircle, line);
        }
      }
    });
  }

  /**
   * Adjusts the given line element to span between the bottom of the first circle
   * and the top of the second circle.
   * @param {HTMLElement} circle1 - The first circle element.
   * @param {HTMLElement} circle2 - The second circle element.
   * @param {HTMLElement} line - The line element to adjust.
   */
  function adjustLine(circle1, circle2, line) {
    const circle1Rect = circle1.getBoundingClientRect();
    const circle2Rect = circle2.getBoundingClientRect();

    const topPosition = circle1Rect.top + circle1Rect.height / 2;
    const bottomPosition = circle2Rect.top + circle2Rect.height / 2;

    line.style.top = `${topPosition}px`; // Set the top of the line to the bottom of the first circle
    line.style.height = `${bottomPosition - topPosition}px`; // Set the height of the line
  }

})();
