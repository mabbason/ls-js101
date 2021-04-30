function greetings(nameArray, titleOccupation) {
  let greetingString = `Hello, ${nameArray.join(' ')}! Nice to have a 
  ${titleOccupation.title} ${titleOccupation['occupation']} around.`;
  return greetingString;
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.