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
    //1-set password length/complexity with the slide bar
    let charCount = document.getElementById("slider").value;

    //2-All 4 character types included into 1 value
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //3-create for loop to choose random characters, need to break this apart into 4 different 
    for (var i = 0; i <= charCount; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //4-prints password in password history 
    document.getElementById("displayPW").innerHTML = password;

    //5-add password to password history and places new one on top and pushes old PW down
    document.getElementById("lastPass").innerHTML += password + "<br /> ";


}