$(function() {
  var toggled = 0;
  var header = $('header');
  var aside = $('#sidebar');
  // Target the first h2 in the header
  var iam = $('#iAm');
  // Qualities display on the header
  var attr = $('#attr');
  var qualities = ['Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'Student', 'Designer'];

  /* ---------------------- */
  /*  Side toggle function  */
  /* ---------------------- */
  var colComp = 'col-xs-12 col-sm-12 col-md-12 col-lg-12';
  var colLess = 'col-xs-10 col-sm-10 col-md-10 col-lg-10';

  var emailMe = function(id) {
    // When click will replace the amount of space depending on the need
    $(id).click(function() {
      if(toggled === 1) {
        header.removeClass(colLess);
        header.addClass(colComp);
        aside.toggle();
        toggled--; // Resets number of toggles in the browser to 0
      }
      else {
        header.removeClass(colComp);
        header.addClass(colLess);
        aside.toggle();
        toggled++; // Adds a 1 to the times toggled has ocurred
      }
    });
  }

  emailMe('#contact');
  emailMe('#portfolio');

  /* ---------------------- */
  /*   Attributes display   */
  /* ---------------------- */
  var i = 0;
  // Iterate through the values in the array of qualities
  var interval = setInterval(function() {
    i++;
    if(i == qualities.length) { // Resets the loop
      i = 0;
    }
    attr.text(qualities[i]);
  }, 1500);

  /* ---------------------- */
  /* Waypoint functionality */
  /* ---------------------- */
  var navLogo = $('#nav-logo');

  // Activates the logo in the nav and add the background color
  var waypoints = $('#skills-section').waypoint(function(direction) { // Trigered when get closed to skills section
    navLogo.removeClass('unactive-logo');
    navLogo.addClass('active-logo');
  }, {
      offset: '21%'
  })

  // Desactivates the logo and remove background color
  var waypoints = attr.waypoint(function(direction) { // Trigered when get closed to attributes
    navLogo.removeClass('active-logo');
    navLogo.addClass('unactive-logo');
  }, {
      offset: '25%'
  })

});
