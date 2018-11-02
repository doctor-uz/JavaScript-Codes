$.ajax({
    url: "/data.json",
    method: "GET",
    success: function(links) {
        var html = "";
        var content;
        var url;

        for (var i = 0; i < links.length; i++) {
            content = links[i].headline;
            url = links[i].url;
            html += "<a class='top' href=" + url + ">" + content + "</a>";
        }

        $("#headlines").html(html);
        console.log($("#headlines").html());
    }
});
