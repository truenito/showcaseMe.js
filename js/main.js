// Initialize showcaseMe
$(document).ready(function () {
    animationInNegative: "animated bounceInLeft",
    animationOutNegative: "animated bounceOutLeft",
    animationInPositive: "animated bounceInRight",
    animationOutPositive: "animated bounceOutRight",
  $('#horizontal-widget').showcaseMe({
    nextBtn: ".horizontal-slider-rightarrow",
    prevBtn: ".horizontal-slider-leftarrow",
    desaturateClass: "desaturate",
    hideClass: "showcaseme-hide"
    });
});
