let userGmail = prompt("Please enter your Gmail:");
let userPassword = prompt("Please enter your Password:");

const validGmail = "user@gmail.com";
const validPassword = "password123";

if (userGmail === validGmail && userPassword === validPassword) {
    console.log("Login Successful!");
    alert("Login Successful!");
} else {
    alert("Invalid Gmail or Password.");
    console.log("Invalid Gmail or Password.");
}
