var selectedRow = null;
function onFormSubmit() {
var formData = readFormData();
if(isValid()){
    if (selectedRow == null) {
    insertNewRecord(formData);
    alert("Your details are saved Sucessfully........");
  }
 else{
  updateRecord(formData);
 }
  resetForm();
}
}

function readFormData() {
  var formData = {};
  formData["Name"] = document.getElementById("Name").value;
  formData["Age"] = document.getElementById("Age").value;
  formData["mobile"] = document.getElementById("mobile").value;
  formData["emailid"] = document.getElementById("mailid").value;
  formData["course"] = document.getElementById("course").value;
  return formData;
}
function resetForm() {
  document.getElementById("Name").value = "";
  document.getElementById("Age").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("mailid").value = "";
  document.getElementById("course").value = "";
  selectedRow = null;
}
function insertNewRecord(data) {
  var table = document
    .getElementById("list")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.facName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.facDep;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.facSub;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.facAge;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.facPlace;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<a onClick="onEdit(this)">Update</a><a onClick="onDelete(this)">Delete</a>`;
}
function onEdit(td)
{if(confirm("Are you upadate your details")){
selectedRow=td.parentElement.parentElement;  
document.getElementById("Name").value=selectedRow.cells[0].innerHTML;
document.getElementById("Age").value=selectedRow.cells[1].innerHTML;
document.getElementById("mobile").value=selectedRow.cells[2].innerHTML;
document.getElementById("mailid").value=selectedRow.cells[3].innerHTML;
document.getElementById("coursee").value=selectedRow.cells[4].innerHTML;}
}
function updateRecord(formData)
{
  alert("Your form updated sucessfully.......")
selectedRow.cells[0].innerHTML=formData.Name;
selectedRow.cells[1].innerHTML=formData.Age;
selectedRow.cells[2].innerHTML=formData.mobile;
selectedRow.cells[3].innerHTML=formData.email;
selectedRow.cells[4].innerHTML=formData.course;
}
function onsubmit(td)
{
if(confirm("are you want to delete this record")){
  row=td.parsentElement.parsentElement;
  document.getElementById("list").deleteRow(row.rowIndex);
  resetForm();
}
}

function isValid(){
var a=document.getElementById("Name").value;
var  b = document.getElementById("Age").value;
var c= document.getElementById("mobile").value;
var d= document.getElementById("mailid").value;
var e= document.getElementById("course").value;
if (validateName(a)&& validatecourse(b)){return true;}
else
{return false;}
if(conditionOnlyDigits(d)){return true;}
else
{return false;}
function validateName(name)
{
const namePattern=/^[a-zA-Z\s'-]+$/;
return namePattern.test(a);
}

function validatecourse(e)
{
const coursePattern=/^[a-zA-Z\s'-]+$/;
return coursePattern.test(e);
}
}