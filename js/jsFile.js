
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
    document.getElementById("myList").className = "scrolleddot";

  } else {
    document.getElementById("myList").className = "dot";

  }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
