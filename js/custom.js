$(document).ready(function() {

    $("#toggleNav").on('click', function(){

      $("#fullMenu").addClass('fullMenuVisible');
      $("#toggleNav").css('display', 'none');
      //deactivate scroll
      $('html, body').css({overflow: 'hidden',height: '100%'});


    })

    $("#removeFullNav").on('click', function(){
      $("#fullMenu").removeClass('fullMenuVisible');
      $("#toggleNav").css('display', 'block');
      $('html, body').css({overflow: 'auto',height: 'auto'});
    });

    console.log( "ready!" );
});
