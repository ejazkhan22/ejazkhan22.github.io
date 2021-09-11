//my variables
// let form = document.getElementById("form");
// let userNameVal = document.getElementById("Username");
// let eMailVal = document.getElementById("Email");
// let pAssoWordVal = document.getElementById("password")
// //Add event
//made a condition for local storge
function signup (){
    const userName = document.getElementById("Username").value.trim();
    const eMail = document.getElementById("Email").value.trim();
    const pAssoWord = document.getElementById("password").value.trim();
    var message = document.getElementById("message");
    
    var created = [];
    var part = [];

    var person = {
        username: userName,
        socialEmail:eMail,
        passwoord:pAssoWord,
        createteam:created,
        partteam:part,
    };
    var signupdata = JSON.parse(localStorage.getItem("person")) || [];
    signupdata.push(person);
    localStorage.setItem("person",JSON.stringify(signupdata));



    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);
}
function login(){
    let eMail = document.getElementById("Email").value.trim();
    let pAssoWord = document.getElementById("password").value.trim();

    var signupdata = JSON.parse(localStorage.getItem("person")) || [];
    //console.log(signupdata[0].socialEmail);
    let falg = false;

        signupdata.forEach((item,index) => {
           // console.log(item.passwoord);
           if(item.socialEmail==eMail&&item.passwoord==pAssoWord){
               falg = true;
            window.location.href="team.html"
            // console.log("ok");
           }
            
        });
    if (falg==false){
        
            alert("email or password is  incoorect");
        
    }











}











    

















