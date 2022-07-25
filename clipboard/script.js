$(document).ready(function(){
  var text='';
   $('.copy').click(function(){
       $('#text').select();
       document.execCommand('copy');
       text=$('#text').val();
   })
   $('.paste').click(function(){
      $('#text1').val(text);
   })

});
