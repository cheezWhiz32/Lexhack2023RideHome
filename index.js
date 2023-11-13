var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var studentName;
var email;
var school;
var bus;
var password;

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

document.getElementById("register").addEventListener("submit", function(event){
    event.preventDefault();
    studentName = document.getElementById("studentName").value;
    email = document.getElementById("email").value;
    school = document.getElementById("school").value;
    bus = document.getElementById("bus").value;
    password = document.getElementById("password").value; 
    window.open("thanks.html");
    console.log(studentName);
    console.log(email);
    console.log(school);
    console.log(bus);
    console.log(password);
});
function dashboard(){
    window.open("studentDash.html");
}

function aboutUs(){
    window.open("homeScreen.html");
    
}
function alertStudents(){
    window.alert("Students have been alerted.");
}
function companyDashboard(){
    window.open("companyDash.html");
}
function companyThanks(){
    window.open("companyThanks.html")
}
