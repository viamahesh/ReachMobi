// slideshow
$("#slideshow > div:gt(0)").hide();
setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);

// downloads
var clicks = 0; 
$('.submit-button').click(
    function(){ 
        clicks++; 
        $('.figure').html(clicks);
        $('.input-text').val('');
        $('.submit-button').prop('disabled', true);
    }
);

// zipcode limit numbers
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

// zipcode validation
$(document).ready(function() {
     $('.input-text').keyup(function() {
        if($(this).val().length === 5) {
            $('.submit-button').prop('disabled', false);
        }else{
            $('.submit-button').prop('disabled', true);
        }
     });
 });