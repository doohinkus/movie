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
//set price here, using values from our array
  var getCost = 0;
  if (age === 0){
    getCost = 0;
  }else if(time === " anytime from noon to 5pm"){
    getCost = 1;
  }else if (movieSelection === "To watch Lord of the Flies"){
    getCost = 2;
  } else{
    getCost = 3;
  }

    $("#output").text(newFinalChoice.userOutput(getCost));

  });

});
