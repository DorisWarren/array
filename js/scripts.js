var array = [""];
$(document).ready(function() {
  $(".form").submit(function(event) {
    var color = $("input#color").val();
    var food = $("input#food").val();
    var num = $("input#num").val();
    array.push(num, food, color);
    console.log(array)
    event.preventDefault();
  });
});
