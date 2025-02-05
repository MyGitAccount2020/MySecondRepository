$(document).ready(function() {
    $("#changeColorBtn").click(function() {
      $("#box").css("background-color", getRandomColor());
    });
  
   