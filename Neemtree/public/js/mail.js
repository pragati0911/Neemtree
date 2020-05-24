// $(document).ready(function(){
//     $("contact-form").submit(function(e){
     
//       preventDefault();
//     });
//   });
//   myFunction = function(e) {
//     // prevents default action to happen
//     e.preventDefault();
//     // do what ever you want to do here
//     // i.e. perform a AJAX call
// }
$(document).ready(function() {
    $(document).on('submit', '#contact-form', function() {
      // do your things
      return false;
     });
});