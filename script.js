// Patient Form
document.getElementById("patientForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("pName").value;
  alert(`Patient ${name} registered successfully!`);
  this.reset();
});

// Doctor Form
document.getElementById("doctorForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("dName").value;
  alert(`Doctor ${name} registered successfully!`);
  this.reset();
});

// Appointment Form
document.getElementById("appointmentForm").addEventListener("submit", function(e){
  e.preventDefault();
  const patient = document.getElementById("aPatient").value;
  const doctor = document.getElementById("aDoctor").value;
  alert(`Appointment booked for ${patient} with Dr. ${doctor}`);
  this.reset();
});
