function SubmitPerson() {
  var fname = $('#fname').val();
  var lname = document.getElementById('lname').value;
  var age = document.getElementById('age').value;
  var identifier = document.getElementById('identifier').value;
  var fgender = document.getElementById('female').checked;
  var mgender = document.getElementById('male').checked;
  var gender = undefined;
  if (fgender == true) {
    gender = "female"
  }
  else { gender = "male" }
  var existingId = document.getElementById('id').value;
  if (true) {
    var a = createPerson(fname, lname, age, gender, identifier)
    $('#id').val(a);
  }
  else {
    updatePerson(fname, lname, age, gender, identifier)
  }

  FillTableWithObjectsFromJavascript();
}

function FillTableWithObjectsFromJavascript() {
  var people = getAll();

  var content = "";
  for (var i = 0; i < people.length; i++) {
    content = content +
      "<tr>"
      + "<td>" + people[i].id + "</td>"
      + "<td>" + people[i].firstname + "</td>"
      + "<td>" + people[i].lastname + "</td>"
      + "<td>" + people[i].age + "</td>"
      + "<td>" + people[i].gender + "</td>"
      + "<td>" + people[i].identifier + "</td>"
      + "</tr>";
  }

  var htmlContent = $("#tableContent");

  htmlContent.html(content);
}