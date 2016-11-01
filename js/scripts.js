function UserChoice (senior, movieSelection, matinee){
  this.senior = senior;
  this.movieSelection = movieSelection;
  this.matinee = matinee;
}
UserChoice.prototype.userOutput = function() {
  return "To watch " + this.movieSelection + " during this time range (" + this.matinee + " ) then your ticket cost is $5";
  }
 // else if (this.movieSelection === 2 && this.matinee === 2) {

// }
// }


$(document).ready(function (){
  $("#userMovieChoice").submit(function (event){
    event.preventDefault();
    var age = $("input:radio[name=age]:checked").val();
    var movieSelection = $("input:radio[name=movieSelection]:checked").val();
    var time = $("input:radio[name=time]:checked").val();

    var newFinalChoice = new UserChoice(age, movieSelection, time);
    console.log(newFinalChoice);

    $("#output").text(newFinalChoice.userOutput());

  });

});
