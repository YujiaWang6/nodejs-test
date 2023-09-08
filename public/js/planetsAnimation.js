window.onload = pageReady;

function pageReady() {
  var hoverContainer = document.getElementById("planetContainer");
  var eachPlanet = document.querySelectorAll(".planetContainer__eachplanet")
  if (hoverContainer) {
    hoverContainer.onmouseover = function() {
        eachPlanet.forEach((planet)=>{
            planet.style.animationPlayState="paused";
        });
    };
    hoverContainer.onmouseleave = function(){
        eachPlanet.forEach((planet)=>{
            planet.style.animationPlayState = "running";
        });
    }
  } 
}