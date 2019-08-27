$(document).ready(function() {
    
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
  
      var sandwhich_id = $(this).children(".sandwhich_id").val();
      console.log(sandwhich_id);
      $.ajax({
        method: "PUT",
        url: "/sandwhichs/" + sandwhich_id
      }).then(function(data) {
        // reload page to display devoured sandwhich in proper column
        location.reload();
      });
  
    });
  });
  