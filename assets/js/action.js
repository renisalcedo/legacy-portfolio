$(function() {
  var toggled = 0;
  var header = $('header');
  var aside = $('#sidebar');
  var iam = $('#iAm');
  var attr = $('#attr');
  var qualities = ['Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'Student', 'Designer'];

  // Side toggle function
  var colComp = 'col-xs-12 col-sm-12 col-md-12 col-lg-12';
  var colLess = 'col-xs-10 col-sm-10 col-md-10 col-lg-10';

  $('#contact').click(function() {
    if(toggled === 1) {
      header.removeClass(colLess);
      header.addClass(colComp);
      aside.toggle();
      toggled--;
    }
    else {
      header.removeClass(colComp);
      header.addClass(colLess);
      aside.toggle();
      toggled++;
    }
  });

  // Attributes display
  var i = 0;
  var interval = setInterval(function() {
    i++;
    if(i == qualities.length) {
      i = 0;
    }
    attr.text(qualities[i]);
  }, 1500);

  // Dialog box
  this.tooltip({
    show: {
      delay: 250
    }
  });
  open: function(event, ui){
    ui.tooltip.animate({ top: ui.tooltip.position().top + 10 }, "fast" );
  };

});
