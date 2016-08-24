'use strict';
$(function() {
  $('#navbar a').click(function(e) {
    let href = $(this).attr('href');
    let tabId = $(this).attr('data-tab');
    if ('#' !== href) {
      e.preventDefault();
      $(document).scrollTop($(href).offset().top - 70);
      if (tabId) {
        $(href).find('a[href="' + tabId + '"]').tab('show');
      }
    }
  });
});