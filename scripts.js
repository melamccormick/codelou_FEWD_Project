var $overlay = $('<div id="overlay"></div>');
var $signupform = $(
  '<form class="form" id="formcontent" action="index.html" method="post">'+
    '<h1>Stay Informed</h1>'+
    '<label for:"firstname">First Name:</label>'+
    '<input type="text" id="firstname" name="user_firstname">'+
    '<label for:"lastname">Last Name:</label>'+
    '<input type="text" id="lastname" name="user_lastname">'+
    '<label for:"email">Email:</label>'+
    '<input type="email" id="mail" name="user_email">'+
    '<div id=button>'+
      '<button type="submit" id="submit" name="user_submit">Submit</button>'+
    '</div>'+
  '</form>');

//add form to overlay
$overlay.append($signupform);
//add overlay to page
$("body").append($overlay);

//capture the click event on the link to the stay-informed signup form
$("#stayinformed a").click(function(event){
  event.preventDefault();
  var formLocation = $(this).attr("href");
//update the overlay with the form
$signupform.attr ("src", formLocation)
//show the overlay
  $overlay.show();
  });

//capture the click event on the submit button and show a thank you alert
$("#submit").click(function(event){
  alert('Thank you for signing up!');
});
