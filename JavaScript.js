//JavaScript
//Owner:Kedie Perdue
//https://www.w3schools.com/js/js_validation.asp
//Duckett, Jon. JavaScript and JQuery: Interactive Front-End Web Development. Wiley & Sons, 2014

function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var program = document.getElementById("program").value;
    var courses = document.getElementById("Courses").value;
    var level = document.getElementById("Level").value;
    var error_message = document.getElementById("error_message");
    
  
    //Error meaages when interacting with the form
    var text;

    if(name.length < 5){
      text = "Please Enter Your Name";
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
    if(program.length < 5){
      text = "Please Enter Program of Study";
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
// Source: https://www.w3schools.com/howto/howto_js_dropdown.asp
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function clickDrop() { 
  var drop = document.getElementById("navLinks");
  if (drop.style.display === "block") {
    drop.style.display = (window.onclick = "none");
    drop.style.display = "none";
  } else {
    drop.style.display = "block";
  }
}
// End Owner: Korey Hayes

////////////////////
// Owner : Honglin (Jim) Wei
// Date  : Dec 6 (v1)
// From  : // https://developers.google.com/maps/documentation/javascript/adding-a-google-map#all
////////////////////

// Initialize init Map function
function initMap(){
  // Give constant variable for fleming location
    const fleming = {lat:44.3431848,lng:-78.7450429};
    
    // Uses the map element to center at fleming, and zoom to lvl 13
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 13,
        center: fleming,
      });

    // Marker pointing at fleming
    const marker = new google.maps.Marker({
      position: fleming,
      map: map,
    });
}
// End Owner: Honglin (Jim) Wei