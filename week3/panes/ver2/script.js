$(document).ready(function() {
    var left = $(".left");
    var slider = $(".slider");
    var container = $(".container");

    slider.on("mousedown", function() {
        // start with slider - mousedown
        container.on("mousemove", function(e) {
            // when mousdown in container, mousemove.
            if (
                e.clientX <=
                container.offset().left +
                    container.outerWidth() -
                    slider.width()
            ) {
                slider.css({ left: e.clientX - container.offset().left });
                left.css(
                    "width",
                    slider.offset().left - container.offset().left
                );
            }
        });
    });

    $(document).on("mouseup", function() {
        container.unbind("mousemove");
    });
});
