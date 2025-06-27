function validateName(name){
const namePattern=/^[a-zA-Z\s'-]+$/;
return namePattern.test(name);
}
function validatemobile(mobilenumber){
const mobilePattern=/^[6-9]\d{9}/;
return mobilePattern.test(mobilenumber);
}
function contains only Digits(str){
const regex=/^\d+$/;
return regex.test(str);
}
functionn contains only Alphabets(str){
const regex=/^[a-zA-Z]+$/;
return regex.test(str);
}
function contains Alphanumeric(str){
const regex=/^[a-zA-Z0-9]+$/;
return regex.test(str);
}
explanation of Regular Expressions
^:Asserts the start of the string
&: Asserts the end of the string
\d:matches any digit(0-9)
[a-zA-Z]:matches any uppercase or lowercase alphabetic characters
[a-zA-Z0-9]:matches any uppercase or lowercase alphabetic characters or any digit
+:matches one or more occurences of the preceeding character or group
.test(str):A method or Regular Expressions objects that for a match in a string and returns true or false
