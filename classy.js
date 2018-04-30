$(function(){
'use strict';

var $circles = $('#circles');

  $circles.find((':nth-child(2)'))
    .addClass('selected');

    $circles.find((':nth-child(4)'))
      .removeClass('selected');


});
