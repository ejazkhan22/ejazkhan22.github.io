var items = [
  { name: "juice", price: 50, quantity: 3 },
  { name: "cookie", price: 30, quantity: 9 },
  { name: "shirt", price: 880, quantity: 1 },
  { name: "pen", price: 100, quantity: 2 },
];

//for single items
let singleItem = items.forEach((item, index) => {
  let items = item.price;
  console.log("The price of items", index, "is", items);
});

//total sum of each item
let total = items.reduce((sum, item) => sum + item.price, 0);
console.log("The total prices of items are Rs: ", total);

//Question No 2

var StudentInfo = {
  firstName: "ejaz",
  lastName: "khan",
  email: "ejazkhan819@gmail.com",
  password: "12345678",
  age: 29,
  gender: "male",
  city: "Karachi",
  country: "Pakistan",
};

let fName = StudentInfo.hasOwnProperty("firstName");
console.log(fName);
let lName = StudentInfo.hasOwnProperty("lastName");
console.log(lName);
let age = StudentInfo.hasOwnProperty("age");
console.log(age);
let country = StudentInfo.hasOwnProperty("country");
console.log(country);

//question no 3
function Person(first, last, age, id, school) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.id = id;
  this.school = school;
}

const Student1 = new Person("Muhammad ejaz", "khan", 23, 20974, "saylani");
const Student2 = new Person("fruqan", "ali", 22, 20975, "saylani");
console.log(Student1, Student2);

//qucetion n0 4
function CheckPopulation(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

const Peoples = new CheckPopulation(
  "Muhammad ejaz",
  "Male",
  "orangitwon",
  "fA",
  "web developer"
);
console.log(Peoples);


function educationData() {
  var select = document.getElementById("education");
  if (localStorage === "") {
    select[localStorage.getItem("save")].selected = true;
  } else if (select.value === "cs") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "acf") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "bba") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "ms") {
    localStorage.setItem("save", select.value);
  }
}


function professionPeoples() {
  var profession = document.getElementById("profession");
  if (localStorage === "") {
    profession[localStorage.getItem("save")];
  } else if (profession.value === "Web developer") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "React Native") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "Flutter Developer") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "Andriod developer") {
    localStorage.setItem("profession", profession.value);
  }
}



var radio = document.getElementsByName("gender");
for (var i = 0; i < radio.length; i++) {
  if (radio[i].checked) {
    localStorage.getItem("gender");
  }
}

