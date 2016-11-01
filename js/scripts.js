function UserChoice (age, movieSelection, matinee, cost){
  this.age = 0;
  this.movieSelection = movieSelection;
  this.matinee = matinee;
  this.cost = [" ticket cost is $5.00", " ticket cost is $7.00", " ticket cost is $8.00", " ticket cost is $10.00"];
}
UserChoice.prototype.userOutput = function(price) {
  return this.movieSelection + this.matinee + this.cost[price];
  }
 // else if (this.movieSelection === 2 && this.matinee === 2) {

// }
// }


$(document).ready(function (){
  $("#userMovieChoice").submit(function (event){
    event.preventDefault();
    var age = parseInt($("input:radio[name=age]:checked").val());
    var movieSelection = $("input:radio[name=movieSelection]:checked").val();
    var time = $("input:radio[name=time]:checked").val();

    var newFinalChoice = new UserChoice(age, movieSelection, time);
    console.log(newFinalChoice);

    $("#output").text(newFinalChoice.userOutput(age));

  });

});
