$.ajax({
    url: "/data.json",
    method: "GET",
    success: function(links) {
        var html = "";
        var headline;
        var url;

        for (var i = 0; i < links.length; i++) {
            headline = links[i].headline;
            url = links[i].url;
            html += "<a class='top' href=" + url + ">" + headline + "</a>";
        }

        $("#headlines").html(html);
        console.log($("#headlines").html());
    }
});
