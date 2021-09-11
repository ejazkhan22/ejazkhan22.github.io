const StName = document.getElementById("name");
const category = document.getElementById("category");
const member = document.getElementById("member");
const addStudents = document.querySelector(".add-students");
const studentForm = document.getElementById("studentForm");

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, category, member) => {
  students.push({
    name,
    category,
    member,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, category, member };
};

const createStudentElement = ({ name, category, member }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentCategory = document.createElement("p");
  const studentMember = document.createElement("p");

  // Fill the content
  studentName.innerText = `student name: ${name}`;
  studentCategory.innerText = `Student category:  ${category}`;
  studentMember.innerText = `Student member:  ${member}`;

  // Add to the DOM
  studentDiv.append(studentName, studentCategory, studentMember);
  addStudents.appendChild(studentDiv);

  

  // -------------------------------------------------------------

  //   const addStudent = document.getElementById("addStudents");
  //   addStudent.classlist.add("mystyle");

  //   addStudents.style.display = students.length === 0 ? "none" : "flex";
};
// addStudents.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = (e) => {
  e.preventDefault();

  const newStudent = addStudent(StName.value, category.value, member.value);

  createStudentElement(newStudent);

  StName.value = "";
  category.value = "";
  member.value = "";
};
function onLogout() {
  var message = document.getElementById("message");
  localStorage.removeItem("user");
  message.innerHTML = "Good Bye.!";
  // clear state
  setTimeout(() => {
      location.href = "login.html";
  }, 2000);
}
function onLogout() {
  var message = document.getElementById("message");
  localStorage.removeItem("user");
  message.innerHTML = "Good Bye.!";
  // clear state
  setTimeout(() => {
      location.href = "login.html";
  }, 2000);
}