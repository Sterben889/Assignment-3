var today = new Date().toISOString().slice(0, 16);

document.getElementsByName("book")[0].min = today;

send(){
  document.getElementById('theForm').submit();
});
function keypresshandler(event)
   {
        var charCode = event.keyCode;
        //Non-numeric character range
        if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
   }
