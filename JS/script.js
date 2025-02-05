$(document).ready(function() {
    $("#changeColorBtn").click(function() {
      $("#box").css("background-color", getRandomColor());
    });
  
    function getRandomColor() {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
       // This comment is just for checking that how to resolve git merge conflicts.
  // As I have a 'feature' branch and in this branch this comment is not available.
  // Now we have created and commited this comment in bugfix branch.
      return color;
    }
  });
 