/*
classy.js
By Yadiel Cabrera Alvarado
Description: This code is part of the course JQuery for Web Designers on Lynda.com by Joe Chellman.
*/
$(function(){
'use strict';

var $circles = $('#circles');

  $circles.find((':nth-child(2)'))
    .addClass('selected');

    $circles.find((':nth-child(4)'))
      .removeClass('selected');


});
