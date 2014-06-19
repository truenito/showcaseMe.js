$.fn.showcaseMe = function (options) {

   if (this.length  == 0) return

    var defaults = {
        animationInNegative: "animated bounceInLeft",
        animationOutNegative: "animated bounceOutLeft",
        animationInPositive: "animated bounceInRight",
        animationOutPositive: "animated bounceOutRight",
        desaturateClass: "desaturate",
        hideClass: "hide",
        nextBtn: ".showcase-next",
        prevBtn: ".showcase-prev",
        autoScroll: true,
        autoScrollTime: 5000,
        disableBtnTime: 1300
    };

    var $showcase,
        $slideables,
        animationEndSpeed,
        currentPage,
        pagesLength;

    self.options = $.extend({}, defaults, options);

    function init() {
        restartVisibility();
        if (self.options.autoScroll === true) {
            autoScrollMe();
        }
    }

    $(this).each(function() {
        $showcase = $(this);
        $slideables = $showcase.find('ul');
        animationEndSpeed = 1000;
        currentPage = 0;
        pagesLength = $showcase.find('ul')[0].children.length;
        init();
    });

    /*
    ** Plugin functions
    */
    // function to slide smoothly depending direction.
    function slideMe(page, direction) {
        if (page >= pagesLength && page > 0) {page = 0;}
        (direction === "next") ? animateSlideNext(page, currentPage) : animateSlidePrev(page, currentPage);
        cleanup(page, direction);
    }

    // Animates elements giving a slide to left rotation feel (all items rotate to the left).
    function animateSlideNext(page, currentPage) {
        $($slideables).each(function(index, element) {
            $(element).find('> li').eq(currentPage).addClass(self.options.animationOutNegative);
            $(element).find('> li').eq(page).addClass(self.options.animationInPositive);
            $(element).find('> li').eq(page).removeClass(self.options.hideClass);
        });
    }

    // Animates elements giving a slide to right rotation feel (all items rotate to the right).
    function animateSlidePrev(page, currentPage) {
        $($slideables).each(function(index, element) {
            $(element).find('> li').eq(currentPage).addClass(self.options.animationOutPositive);
            $(element).find('> li').eq(page).addClass(self.options.animationInNegative);
            $(element).find('> li').eq(page).removeClass(self.options.hideClass);
        });
    }

    // Brings everything back to it's normal state for a given page.
    function cleanup(page,direction) {
        setTimeout(function() {
            $($slideables).each(function(index, element) {
                $(element).find('> li').eq(page).siblings().removeClass(self.options.animationOutNegative + " " + self.options.animationInNegative + " " + self.options.animationOutPositive + " "+ self.options.animationInPositive);
                $(element).find('> li').eq(page).siblings().addClass(self.options.hideClass);
            });
        }, animationEndSpeed);
        (currentPage === 0 && direction != "next")? currentPage = pagesLength - 1: currentPage = page;
    }

    // Hide all but first li(s) on init.
    function restartVisibility() {
        $($slideables).each(function( index, element ) {
            $(element).find('> li:gt(0)').addClass(self.options.hideClass);
        });
    }

    function disableClicks(selector, time) {
       $(selector).attr("style","pointer-events: none");
        setTimeout(function() {
            $(selector).attr("style","");
        }, time);
    }

    function autoScrollMe() {
        interval = setTimeout(function() {
             moveTo("next");
             autoScrollMe();
        }, self.options.autoScrollTime);
    }

    function moveTo(movement) {
        movement === "next" ? slideMe(currentPage + 1 , "next") : slideMe(currentPage - 1 , "previous");
        disableClicks(self.options.prevBtn, self.options.disableBtnTime);
        disableClicks(self.options.nextBtn, self.options.disableBtnTime);
    }

    $showcase.hover(function( e ) {
      return e.type=='mouseenter' ? clearInterval(interval) : autoScrollMe();
    });

    /*
    ** Plugin bindings
    */
    // Binding the left arrow to a "previous" page.
    $(self.options.prevBtn).click(function () {
        moveTo("previous");
        $(self.options.prevBtn).removeClass(self.options.desaturateClass);
        $(self.options.nextBtn).addClass(self.options.desaturateClass);
    });

    // Binding the left arrow to a "next" page.
    $(self.options.nextBtn).click(function () {
         moveTo("next");
        $(self.options.nextBtn).removeClass(self.options.desaturateClass);
        $(self.options.prevBtn).addClass(self.options.desaturateClass);
    });
};
