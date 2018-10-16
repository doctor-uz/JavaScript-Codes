(function() {
    var elem = $("#headlines");
    var links = $("a");
    var animId;
    var left = elem.offset().left;

    function moveHeadlines() {
        left = left - 1;

        if (left <= -links.eq(0).outerWidth()) {
            left = left + links.eq(0).outerWidth();
            elem.append(links.eq(0));
        }
        elem.css("left", left + "px");
        // elem.style.left = left + "px";
        animId = requestAnimationFrame(moveHeadlines); ///
        links = $("a");
    }

    for (var i = 0; i < links.length; i++) {
        links.eq(i).on("mouseover", function() {
            cancelAnimationFrame(animId);
            $(this).css("color", "red");
        });
        links.eq(i).on("mouseout", function() {
            moveHeadlines();
            $(this).css("color", "blue");
        });
    }

    moveHeadlines();
})();
