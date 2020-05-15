var people = [];
var idCounter = 0;

function createPerson (firstname, lastname, age, gender, identifier){
    
  idCounter++;
  
    var person =  {
      firstname: firstname,
      lastname: lastname,
      age: age,
      gender: gender,
      id: idCounter,
      identifier: identifier
    }  
    people.push(person);
    
    
    return person.id;
  }

function getPerson(id) {
  var result = undefined;
  for(var i = 0; i < people.length; i++)
  {
    if(people[i].id == id){
      result = people[i];
    }
  }
  return result }

var a = createPerson ("Dani", "Bah", 23, "female",1143005);
var found = getPerson(1);

console.log(found);


function updatePerson(id, firstname, lastname, age, gender) 
  {
  for(var i = 0; i < people.length; i++)
  {
    if(people[i].id == id){
      people[i].firstname = firstname;
      people[i].lastname = lastname;
      people[i].age = age;
      people[i].gender = gender;
    }
  }
  return true
}

var b = updatePerson (1, "Soso", "Tughushi", 28, "male")
var z = getPerson(1)
console.log(z)

function deletePerson(id)
  {
  for(var i = 0; i < people.length; i++)
  {
    if(people[i].id == id){
    people.splice(i,id)
    }
  }
    return true
    }

 var u = deletePerson (1)
  console.log(people);
  
  
  function getAllPeople (array)
  {return people}
    
r = getAllPeople (people)
console.log(r);
  