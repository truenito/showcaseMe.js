// Initialize showcaseMe
$(document).ready(function () {
  $('.horizontal-showcase').showcaseMe({
    sliderWrapper: "#horizontal-widget",
    animationInNegative: "animated bounceInLeft",
    animationOutNegative: "animated bounceOutLeft",
    animationInPositive: "animated bounceInRight",
    animationOutPositive: "animated bounceOutRight",
    nextBtn: ".horizontal-slider-rightarrow",
    prevBtn: ".horizontal-slider-leftarrow",
    desaturateClass: "desaturate",
    hideClass: "showcaseme-hide"
    });
});
