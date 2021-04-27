

// sticky header js

//when the user scroll the page ,execute function
window.onscroll =function() {stikyHeader()};

//Get the header 
var header = document.getElementById("header");

//Get the offset position of header 
var sticky = header.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. 
//Remove "sticky" when you leave the scroll position

function stikyHeader(){
  if(window.pageYOffset >= sticky){
    header.classList.add("sticky")
  
  }else{
    header.classList.remove("sticky");  
  }
}

// First slider or haader slider 

var swiper = new Swiper('.header-slider.swiper-container', {  
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    
  navigation: {
    nextEl: '.header-slider.swiper-button-next',
    prevEl: '.header-slider.swiper-button-prev',
  },
});


// Seond slider 

var playerDetials = new Swiper('.player-details.swiper-container', {
      slidesPerView: 1,
      loop: true,
      speed: 1000,

      navigation:{
        nextEl: '.player-details.swiper-button-next',
        prevEl: '.player-details.swiper-button-prev',
      },

});





/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
      event.preventDefault();
      event.stopPropagation();
  if (!event.target.matches('.drop-down-link')) {
    var dropdowns = document.getElementsByClassName("drop-down-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


