//HTML button element
//  $ - gives instructions to go the HTML file
// ("") - argument passed to $
// those two combined allow us to access elements
var addBtn = $(".button");
var addedRecipesContainer = $(".addedRecipesContainer");

addBtn.on("click", addRecipe);
addBtn.on("click", clearField);


// addRecipe function
function addRecipe(){
  event.preventDefault();

  // get the values from fields
  // .val() - gets value from HTML element
  var recipeName = $(".name").val();
  var difficulty = $(".difficulty").val();
  var time = $(".time").val();
  var link = $(".link").val();

  // append recipe to container
  addedRecipesContainer.append(`
      <div class="recipeRow">
        <p class="name"><a href="${link}">${recipeName}</a></p>
        <p class="difficulty">${difficulty}</p>
        <p class="time">${time}</p>
      </div>
  `);
}

// clear input fields after adding recipe
function clearField(){
  var recipeName = $(".name").val("");
  var difficulty = $(".difficulty").val("");
  var time = $(".time").val("");
  var link = $(".link").val("");
}
