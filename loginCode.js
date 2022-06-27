function checkCreds()   {
console.log("checkCreds() started");
//create variables 

var firstName;
var lastName;
var fullName;
var badgeNumb;
var fullNameLength;

//inject from data 
firstName = document.getElementById("fName").value;
console.log(firstName);
lastName = document.getElementById("lName").value;
console.log(lastName);
fullName = firstName + " " + lastName;
console.log(fullName); 

badgeNumb = document.getElementById("BadgeID").value;
console.log("Badge number = " + badgeNumb);

//check name length
fullNameLength = fullName.length;
console.log(fullNameLength);
if(fullNameLength > 20){
    document.getElementById("loginStatus").innerHTML = "Full name is incorrect, please resubmit";
} else if (badgeNumb > 999 || badgeNumb < 1) {
//check badge ID number
    document.getElementById("loginStatus").innerHTML.HTML =
     "Badge Number is incorrect, please resubmit";
} else {
    alert("Crediental Submission succesful, welcome " + fullName + "!");
    location.replace("./Mission Control Blastoff.html");
}
//if correct, move on to uatspace page
 






}