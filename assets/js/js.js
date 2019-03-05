window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 30px 0px 10px";
    document.getElementById("navbar").style.backgroundColor ="whiteSmoke";
    document.getElementById("navbar").style.opacity = "0.5";
    
  } else {
    document.getElementById("navbar").style.padding = "30px 30px 0px 10px";
    document.getElementById("navbar").style.backgroundColor ="transparent"
  }
}
