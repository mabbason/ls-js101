/*Question 9

Function and method calls can take expressions as arguments. Suppose we define a function named rps as follows, which follows the classic rules of the rock-paper-scissors game, but with a slight twist: in the event of a tie, it just returns the choice made by both players.
*/

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
//What does the following code output?

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
//It outputs paper


//fist1 = recursive stack
//top level = rps(paper, rock)
//2nd level = rps("rock", "paper")      &&     rps("rock", "scissors")
//2nd level results: paper                              rock

//fist2 = rock

//So the final comparison is rps(paper, rock) which logs paper