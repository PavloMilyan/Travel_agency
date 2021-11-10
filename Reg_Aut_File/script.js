$('.img-view').click(function(){
    $('.img-view').css('display','none');
  });
  
  $('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

