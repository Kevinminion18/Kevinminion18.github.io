'use strict';
(function() {
    // Get the elements
    var hoverTarget = document.querySelector('.hover-target');
    var groupImage = document.getElementById('groupImage');

    // Show image on mouseover
    hoverTarget.addEventListener('mouseover', function() {
        groupImage.style.display = 'block';
    });

    // Hide image on mouseout
    hoverTarget.addEventListener('mouseout', function() {
        groupImage.style.display = 'none';
    });
})();