var people = [];
var idCounter = 0;

function createPerson(firstname, lastname, age, gender, identifier) {

  idCounter++;

  var person = {
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
  for (var i = 0; i < people.length; i++) {
    if (people[i].id == id) {
      result = people[i];
    }
  }
  return result
}


function updatePerson(id, firstname, lastname, age, gender) {
  for (var i = 0; i < people.length; i++) {
    if (people[i].id == id) {
      people[i].firstname = firstname;
      people[i].lastname = lastname;
      people[i].age = age;
      people[i].gender = gender;
    }
  }
  
  return true
}

function getAll() {
  return people;
}
