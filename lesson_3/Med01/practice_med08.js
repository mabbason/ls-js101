/*Question 8

One day, Spot was playing with the Munster family's home computer, 
and he wrote a small program to mess with their demographic data:
*/

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
//After writing this function, he typed the following code:
messWithDemographics(munsters)

console.log(munsters);

/*
Before Grandpa could stop him, Spot hit the Enter key with his tail. 
Did the family's data get ransacked? Why or why not?
*/

/*
Fist off... daaaaaaammmn Spot! What did you get on your JS101 Lesson 2 quiz?!
Higher than me I'm guessing... ;)

I do think spot ransacked the data. Because Object.values returns 
an array like the following:
[{ age: 32, gender: "male" },
  { age: 30, gender: "female" },
  { age: 402, gender: "male" },
  { age: 10, gender: "male" },
  { age: 23, gender: "female" }
]
Which at first seems like well it's only working on that array... but that
is an array full of objects, which are all pointing back to the
same objects nested within the munsters object. so yeah it modifies them.
Boom, finally I believe I nailed it!
Well it seems like I was maybe describing the same thing a different way?
Or that I was only close but actually still missing something more likely.
*/
