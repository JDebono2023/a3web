//JavaScript
//Owner:Kedie
//https://www.w3schools.com/js/js_validation.asp

function validate(){
    var name = document.getElementById("name").value;
    var program = document.getElementById("program").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var Courses = document.getElementById("Courses").value;
    var Level = document.getElementById("Level").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter Your Name";
      error_message.innerHTML = text;
      return false;
    }
    if(program.length < 5){
      text = "Please Enter Program of Study";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter a valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(course.length <= 25){
      text = "Please Enter courses";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
//Kedie

// Javascript Owner: Korey Hayes
// Source: w3schools
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function clickDrop() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.navDrop')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }