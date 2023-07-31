function nextTime() {
  var text = "Welcome!";

  return text;

}

quirky = nextTime();
quirky = String(quirky);

var speed = 75;
var i = 0;

function typeWriter() {
  if (i < quirky.length) {
    try {
      document.getElementById("form").innerHTML += quirky.charAt(i);
    }
    catch(err) {
      console.log("NO ID FORM");
    }
   
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();



// });

window.onresize = function(event) {
  if(screen.width > 768)
  {
    document.getElementsByClassName('nav-items-menu')[0].style.transition = "0s";
    document.getElementsByClassName('nav-items-menu')[0].style.maxHeight = null;
  }
  else 
  {
    document.getElementsByClassName('nav-items-menu')[0].style.transition = "max-height 0.2s ease-out";    

  }
};



var coll = document.getElementsByClassName("nav-menu-button");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.getElementsByClassName("nav-items-menu")[0];
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}