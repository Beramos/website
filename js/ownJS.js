/* Own JS code */

/* Sidebar */
function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('mySidenav').style.paddingRight = '15px';
    document.getElementById('mySidenav').style.borderStyle = 'solid';
    document.getElementById('mySidenav').style.borderRight = 'thick double #545454';
    document.getElementById('mySidenav').style.borderTop = 'thick double #545454';
    document.getElementById('mySidenav').style.borderBottom = 'thick double #545454';
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('mySidenav').style.paddingRight = '0';
    document.getElementById('mySidenav').style.borderStyle = 'none';

}

/* JQuery */

$(document).ready(function() {
  $('.hoverAction').hover(
      function() { $(this).addClass('Hover'); 
                 }, function() {
                     $(this).removeClass('Hover');
      });
  $('.hoverAction').click(
    function(){
        $(this).css({
            position: 'relative',
            top     : 0,
            left    : 0,
            zIndex  : 99,
            background : '#f2f2f2',
            'padding-top' : '20px' 
        });
        
        $('.additionInfo').css({
            position: 'relative',
            top     : 0,
            left    : 0,
            zIndex  : 99,
            background : '#f2f2f2'
        }); 
        
        $(this).next().slideDown(600);  
        
        var w = $(window).width();
        var h = $(window).height();
        var $overlay = $('<div/>', {
          'id': 'overlay',
           css: {
               position   : 'absolute',
               height     : h + 1000 + 'px',
               width      : w + 'px',
               left       : 0,
               top        : 0,
               background : '#000',
               opacity    : 0.5,
               zIndex     : 98
          }
         }).appendTo('body');
        
        var $topOverlay = $('<div/>', {
          'id': 'topOverlay',
           css: {
               position   : 'absolute',
               height     : h + 1000 + 'px',
               width      : w + 'px',
               left       : 0,
               top        : 0,
               background : '#000',
               opacity    : 0,
               zIndex     : 100
          }
         }).appendTo('body');
         
         $('#topOverlay').click( function () {
            $(this).remove();
            $('#overlay').remove();
            $('.additionInfo').slideUp(600);
            $('.hoverAction').removeAttr('style');
         })
    });
});