$(document).ready(function(){
   var removedCounter = 0;
    var saved;
   
   
      $('#sendBtn').click(function () {
        var text = $('.input-text').val();
        $(':checked').siblings().text(text);
      });
    
    
    
    
      $('#removeBtn').click(function () {
         if(saved){
          $.merge(saved, $(':checked').parent().detach());
         } else {
          saved = $(':checked').parent().detach();
         }
        removedCounter = saved.length;
        $("#removed").html(removedCounter);
        
      });
    
    
    
      $('#restoreBtn').click(function () {
        $(saved).appendTo('#ul');
        removedCounter = 0;
        $("#removed").html(removedCounter);
      });
   
    $('#selectAll').click(function() {
        $(":checkbox").prop('checked', true);
    });

    $('#clearAll').click(function() {
        $(":checkbox").prop('checked', false);
    });

    $('#inputClear').click(function() {
        $(':checked').parent().removeClass();
        $('span').text("");
        $(":checkbox").prop('checked', false);
    });



    $("#blue").click(function(){
      $(":checked").parent().addClass("inputBlue");
    });

    $("#green").click(function(){
        $(":checked").parent().addClass("inputGreen");
      });



      $("#teal").click(function(){
        $(":checked").parent().addClass("inputTeal");
      });

      $("#pink").click(function(){
        $(":checked").parent().addClass("inputPink");
      });

      $("#yellow").click(function(){
        $(":checked").parent().addClass("inputYellow");
      });

      $("#gray").click(function(){
        $(":checked").parent().addClass("inputGray");
      });

      $("#purple").click(function(){
        $(":checked").parent().addClass("inputPurple");
      });

      $("#orange").click(function(){
        $(":checked").parent().addClass("inputOrange");
      });

      $("#azure").click(function(){
        $(":checked").parent().addClass("inputAzure");
      });

      $("#red").click(function(){
        $(":checked").parent().addClass("inputRed");
      });
   

});