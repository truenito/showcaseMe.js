showcaseMe.js
=============

showcaseMe is a javascript multipurpose content slider that levarages animate.css transitions by default but it's open to be used with other css animation libraries.

### Getting started

You can check the demo files to see a very straight forward implementation. If too lazy just follow these steps:

1) Include the plugin dependencies:

```html
<link rel="stylesheet" href="css/animate.css">
<script src="js/vendor/jquery-1.11.0.min.js" ></script>
<script src="js/showcaseMe.js"></script>
```

2) Write markup that contains prev/next arrow links and a ul that contains li's (scrolling contents) inside a wrapper.
Something like this:

```html
<div id="widget">
  <a href="#"><div class="leftarrow"></div></a>
  <div class="horizontal-main-product-area horizontal-showcase">
    <ul>
      <li>
        <img src="img/panda.png" />
      </div>
    </li>
      <li>
      <img src="img/panda-2.png" />
    </ul>
  </div>
  <a href="#"><div class="rightarrow"></div></a>
</div>
```

3) Initialize the plugin on the wrapper and send the previous/next button identifiers (id or classes) along with a hide class.
Something like this:

```javascript
// Initialize showcaseMe
$(document).ready(function () {
  $('#widget').showcaseMe({
    nextBtn: ".rightarrow",
    prevBtn: ".leftarrow",
    hideClass: "hide"
    });
});
```
4) ????

5) Profit!

### FAQs

##### Can I have more than one slider present?
Hell yes!
All you need is to create more ul's inside the chosen wrapper and the li's will slide along with the others.

##### Can I choose other animations to transition slides?
Yup, all you need is to send them as parameters (see the params section).

##### If autoscroll is turned on, does it always scroll around like a carousel?
In theory, yes, as long as you don't hover over it, else the autoscroll timer will reset.

##### What else can I do?
You can also desaturate items not being shown (to make upcoming/next items look dimmed on the other ul's), you can also deactivate autoscrolling or change the default auto scrolling time.

### Params
```javascript
animationInNegative:
//animation for the item coming in when hitting back | default: "animated bounceInLeft",
animationOutNegative:
//animation for the item going out when hitting back | default: "animated bounceOutLeft",
animationInPositive:
//animation for the item coming in when hitting next | default: "animated bounceInRight",
animationOutPositive:
//animation for the item going out when hitting next | default: bounceOutRight",
desaturateClass:
//Class to apply to items that are not the current selection | default: "desaturate",
hideClass:
//Class to apply to items not being shown at all | default: "hide",
nextBtn:
//Class that identifies the next button | default: ".showcase-next",
prevBtn:
//Class that identefies the previous button | default: ".showcase-prev",
autoScroll:
//Whether the slider should autoscroll or not | default: true,
autoScrollTime:
//Time it takes to scroll again if slider is not being hovered: 5000
disableBtnTime:
//Time the next/prev buttons stay unclickable | default: 1300
```
