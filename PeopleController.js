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
  if (existingId == "") {
    var a = createPerson(fname, lname, age, gender, identifier)
    $('#id').val(a);
  }
  else {
    updatePerson(fname, lname, age, gender, identifier)
    
  }

}