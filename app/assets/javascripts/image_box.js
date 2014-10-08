$(document).ready(function(){

  $('li > a').click(function(){
    console.log('has been clicked')
    $(this).css('color', 'black');
  });

  $('#synth').click(function(){
    $('.image_box').css('display','block')
    $('.synth').css('display', 'block');
  });

    $('#soft_synth').click(function(){
    $('.image_box').css('display','block')
    $('.soft_synth').css('display', 'block');
  });

});
