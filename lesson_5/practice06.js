let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

function printFamilyMember(obj){
  for(let member in obj) {
    let name = member[0].toUpperCase() + member.slice(1);
       
    console.log(`${name} is a ${obj[member]['age']}-year-old ${obj[member]['gender']}.`);
  }
}

printFamilyMember(munsters);