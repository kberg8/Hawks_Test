// JavaScript Document
function fadeMovies() {
   var current_img = $('#movies img').eq(0);
   var next_img = current_img.next('img');        
   current_img.fadeOut().appendTo('#movies');        
   next_img.fadeIn();
        }
$('#movies img').each(function(){
    $(this).hide();
});
$('#movies img').eq(0).show();
$('#movies img').click(function(){
    window.location = $(this).attr("rel");
});

  setInterval(fadeMovies, 3000);  