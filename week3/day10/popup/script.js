//1. Define working objects:
//men - hamburger buttom, box - actual menu, x - close buttom
//2. Add click function to men(hamburger logo):
//  a) stopPropogation: function needs only for hamburger logo
//  b) add for "box - actual menu" on class, which is "left (css) - 78%";
//  c) add remove class, which is left 100%
//3. Prevent closing event while clicking on "box" - actual menu
//4. Clicking out of "box - actual menu" need to be hided
//5. Inside "box" give event to "x" in order to close box - left100%.

$(document).ready(function() {
    var men = $(".menu");
    var box = $(".hamburger-menu");
    var x = $(".x");
    var popUp = $(".popUp");
    var secondX = $(".secondX");

    men.on("click", function(e) {
        e.stopPropagation();
        box.removeClass("remove");
        box.addClass("on"); //change left
    });

    box.on("click", function(e) {
        e.stopPropagation();
    });

    $(document).on("click", function() {
        box.removeClass("on");
        box.addClass("remove"); //hide
    });

    x.on("click", function() {
        box.removeClass("on");
        box.addClass("remove"); //hide
    });

    //===========PopUp menu block=========
    setTimeout(function() {
        popUp.css("display", "block");
    }, 1000);

    //hide the pop-up when you click on the close button
    secondX.on("click", function() {
        popUp.css("display", "none");
    });
});
