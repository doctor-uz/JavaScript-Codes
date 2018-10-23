(function() {
    var moreVal = 0;

function getResults(a){
    a = {
        url: "https://elegant-croissant.glitch.me/spotify",
        data: {
            q: $("#input").val(),
            type: $("#select").val()
        }
};

    $("#button").on("click", function() {
        $.ajax(getResults(a),
            success: function(data) {
                data = data.artists || data.albums;

                if (data.next) {
                    moreVal = 20;
                    $("#more").show();
                } else {
                    $("#more").hide();
                }

                var resultHtml = "";

                resultHtml +=
                    "<h2> Results for " + $("input").val() + "</h2> <br/>";

                //nextUrl = data.next;

                if (data.items.length == 0) {
                    resultHtml +=
                        "<div class='error'> No results found! </div>";
                    $("#more").hide();
                }

                for (var i = 0; i < data.items.length; i++) {
                    if (data.items[i].images[0]) {
                        var resImg = data.items[i].images[0].url;
                    } else {
                        resImg = "no-results.jpg";
                    }

                    if (data.items[i].name[0]) {
                        var name = data.items[i].name;
                    } else {
                        name = "no-results.jpg";
                    }

                    resultHtml += "<div class='result'>";
                    resultHtml +=
                        "<div><a href='" +
                        data.items[i].external_urls.spotify +
                        "'target='_blank'><img src='" +
                        resImg +
                        "'/></a></div>";
                    resultHtml +=
                        "<div><p><a href='" +
                        data.items[i].external_urls.spotify +
                        "'target='_blank'>" +
                        name +
                        "</p></div>";
                    resultHtml += "</div>";
                }
                $(".results").html(resultHtml);
            }
        });
    });

    $("#more").on("click", function() {
        $.ajax({
            url: "https://elegant-croissant.glitch.me/spotify",
            data: {
                q: $("#input").val(),
                type: $("#select").val(),
                offset: moreVal
            },
            success: function(data) {
                data = data.artists || data.albums;

                if (data.next) {
                    moreVal += 20;
                    $("#more").show();
                    console.log("data.next");
                } else {
                    $("#more").hide();
                }

                var resultHtml = "";

                for (var i = 0; i < data.items.length; i++) {
                    if (data.items[i].images[0]) {
                        var resImg = data.items[i].images[0].url;
                    } else {
                        resImg = "no-results.jpg";
                    }

                    if (data.items[i].name[0]) {
                        var name = data.items[i].name;
                    } else {
                        name = "no-results.jpg";
                    }

                    resultHtml += "<div class='result'>";
                    resultHtml +=
                        "<div><a href='" +
                        data.items[i].external_urls.spotify +
                        "'target='_blank'><img src='" +
                        resImg +
                        "'/></a></div>";
                    resultHtml +=
                        "<div><p><a href='" +
                        data.items[i].external_urls.spotify +
                        "'target='_blank'>" +
                        name +
                        "</p></div>";
                    resultHtml += "</div>";
                }
                $(".results").append(resultHtml);
            }
        });
    });
})();





// //===========Today starts here ======================================
// console.log("location: ", location.search.indexOf("scroll=infinite"));
//
// if (location.search.indexOf("scroll=infinite") > -1) {
//     console.log("infinite infinite scroll!!");
// }
//
// var timeoutId;
// function checkInfineteScroll() {
//     // scrollTop  - how many pixels down has usewr scroll?
//     // document height - how big is the page that I am on?
//     // window height - height of BROWSER window.
//
//     clearTimeout(timeoutId);
//
//     console.log("scroll top: ", $(document).scrollTo());
//     console.log("document height: ", $(document).height());
//     console.log("window height: ", $(window).height());
//
//     console.log(
//         "window height + scrollTop: ",
//         $(window).height() + $(document).scrollTo() >=
//             $(document).height() - 400 //$(document).height() * 0.1
//     );
//
//     if (
//         $(window).height() + $(document).scrollTo() >=
//         $(document).height() - 400
//     ) {
//         //let get more results
//         console.log("happening?");
//         //second ajax call
//     } else {
//         timeoutId = setTimeout(checkInfineteScroll, 3000);
//     }
// }
//
// //setTimeout(checkInfineteScroll, 5000);
//
// http - server - c - 0; // in the folder
//
// function getRuslts() {
//     $(ajax);
//
//     //for all
// }
//
//
// $(document).on('click', '#button, #more', function(e)){
//  $(e.target)
//
// }
