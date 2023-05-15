// Countdown Timer
var countdownDate = new Date("2023-12-31T23:59:59").getTime();

var countdownTimer = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown-timer").innerHTML = "EXPIRED";
    }
}, 1000);

// Scroll to Top Button
window.onscroll = function() {
    var scrollToTopButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};
// Dark Mode Toggle
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("my-slides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

    function showHideContent() {
        var content = document.getElementById("toggle-content");
        var button = document.getElementById("toggle-button");
        if (content.style.display === "none") {
            content.style.display = "block";
            button.innerHTML = "Hide Content";
        } else {
            content.style.display = "none";
            button.innerHTML = "Toggle Content";
        }
    }
