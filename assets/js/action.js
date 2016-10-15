$(function() {
  var toggled = 0;
  var header = $('header');
  var aside = $('#sidebar');
  var iam = $('#iAm');
  var attr = $('#attr');
  var qualities = ['Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'Student', 'Designer'];

  // Side toggle function
  $('#contact').click(function() {
    if(toggled === 1) {
      header.removeClass('col-lg-10');
      header.addClass('col-lg-12');
      aside.toggle();
      toggled--;
    }
    else {
      header.addClass('col-lg-10');
      aside.toggle();
      toggled++;
    }
  });

  // Qualities display
  var i = 0;
  var interval = setInterval(function() {
    i++;
    if(i == qualities.length) {
      i = 0;
    }
    attr.text(qualities[i]);
  }, 2000);
});
