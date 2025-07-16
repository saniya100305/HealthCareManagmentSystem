const doctors = [
  { name: "Dr. Smith", specialization: "Cardiology", qualification: "MD", contact: "1112223333" },
  { name: "Dr. Jane", specialization: "Neurology", qualification: "PhD", contact: "4445556666" }
];

const tbodyDoctors = document.getElementById("doctorsTableBody");

doctors.forEach(d => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${d.name}</td>
    <td>${d.specialization}</td>
    <td>${d.qualification}</td>
    <td>${d.contact}</td>
  `;
  tbodyDoctors.appendChild(tr);
});
