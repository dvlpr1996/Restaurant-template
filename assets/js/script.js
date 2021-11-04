// open menu tab function
function openmenu(event, menuname) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(menuname).style.display = "block";
  event.currentTarget.className += " active";
}

//go to top 
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//navigation bar
$(".menu-icon").click(function () {
  $(".nav").fadeToggle(1000);
});

//light box script
lightbox.option({
  'resizeDuration': 100,
  'wrapAround': true,
  'alwaysShowNavOnTouchDevices': true,
  'disableScrolling': true,
  'imageFadeDuration': 400,
  'showImageNumberLabel': false,
  'positionFromTop': 100,
  'albumLabel': 'Image %1 of %2',
});

// register modal form script
let modal = $('#modal');
$("#btn-reg").click(function () {
  $("#modal-reg").css({ 'display': 'block' });
});

$(".close").click(function () {
  $("#modal-reg").css({ 'display': 'none' });
});

$(".cancel-btn").click(function () {
  $("#modal-reg").css({ 'display': 'none' });
});

// log in modal script
$("#sign-in-btn").click(function () {
  $("#modal").css({ 'display': 'block' });
});

$(".close").click(function () {
  $("#modal").css({ 'display': 'none' });
});

$(".cancel-btn").click(function () {
  $("#modal").css({ 'display': 'none' });
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//order btn script
$("#order").click(function () {
  let order_msg = confirm("You Should Log In First.");

  if (order_msg == true) {
    $("#modal").css({ 'display': 'block' });
  }
  else {
    $("#modal").css({ 'display': 'none' });
  }

});
