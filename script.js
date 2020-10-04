//document.getElementById(`password`).onclick = function() { myFunction() };

//function myFunction() {
//var passwd = '';
//var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//for (i = 1; i < 9; i++) {
//var c = Math.floor(Math.random() * chars.length + 1);
//passwd += chars.charAt(c)

//}
////document.getElementById("passwd").innerHTML = "";
//console.log(passwd)
// return passwd;

//}

//NEW PASS WORD GENERATOR 


//generate
function generate() {
    //set password length/complexity with the slide bar
    let complexity = document.getElementById("slider").value;

    //All 4 character types included into 1 value
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose random characters, need to break this apart into 4 different 
    for (var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //prints password in password history 
    document.getElementById("displayPW").value = password;

    //add password to password history and places new one on top and pushes old PW down
    document.getElementById("lastPass").innerHTML += password;


}