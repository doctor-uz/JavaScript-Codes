(function() {
    var button = $("#button");
    var input = $("input");
    var select = $("select");
    var offsetStart = 0;
    var more = $("#more");

    var getMoreResults = function() {
        $.ajax({
            url: "https://elegant-croissant.glitch.me/spotify",
            method: "GET",
            data: {
                q: input.val(),
                type: select.val(),
                offset: offsetStart
            },
            success: function(data) {
                data = data.artists || data.albums;

                if (data.next) {
                    offsetStart += 20;
                    $("#more").show();
                } else {
                    $("#more").hide();
                }

                var resultHtml = "";
                for (var i = 0; i < data.items.length; i++) {
                    var img;
                    var name = data.items[i].name;
                    if (data.items[i].images[0]) {
                        img = data.items[i].images[0].url;
                    } else {
                        img = "no-results.jpg";
                    }

                    resultHtml += '<div class = "result">';
                    resultHtml +=
                        "<a href='" +
                        data.items[i].external_urls.spotify +
                        "'>" +
                        "<img src ='" +
                        img +
                        "'>" +
                        "</a>";
                    resultHtml +=
                        "<a href=" +
                        data.items[i].external_urls.spotify +
                        ">" +
                        name +
                        "</a>";
                    resultHtml += "</div>";
                }

                $(".results").append(resultHtml);

                if (data.items.length == 0) {
                    $(".results").html("No results found for " + input.val());
                }

                if (location.search.indexOf("scroll=infinite") > -1) {
                    checkInfiniteScroll();
                    more.hide();
                }
            }
        });
    };

    button.on("click", function() {
        getMoreResults();
    });

    more.on("click", function() {
        getMoreResults();
    });

    //Scrolllllllllll================
    var timeoutId;
    function checkInfiniteScroll() {
        clearTimeout(timeoutId);

        if (
            $(window).height() + $(document).scrollTop() >=
            $(document).height() - 400
        ) {
            getMoreResults();
        } else {
            timeoutId = setTimeout(checkInfiniteScroll, 2000);
        }
    }
})();
