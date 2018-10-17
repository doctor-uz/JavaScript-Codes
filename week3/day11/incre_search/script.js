(function() {
    var countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Angola",
        "Anguilla",
        "Antigua",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bonaire (Netherlands Antilles)",
        "Bosnia Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Congo, The Democratic Republic of",
        "Cook Islands",
        "Costa Rica",
        "Croatia",
        "Curacao (Netherlands Antilles)",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iraq",
        "Ireland (Republic of)",
        "Israel",
        "Italy",
        "Ivory Coast",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kosovo",
        "Kosrae Island",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia (FYROM)",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Moldova",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Nepal",
        "Netherlands",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Ponape",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Rota",
        "Russia",
        "Rwanda",
        "Saba (Netherlands Antilles)",
        "Saipan",
        "Samoa",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "St. Barthelemy",
        "St. Croix",
        "St. Eustatius (Netherlands Antilles)",
        "St. John",
        "St. Kitts and Nevis",
        "St. Lucia",
        "St. Maarten (Netherlands Antilles)",
        "St. Thomas",
        "St. Vincent and the Grenadines",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Tinian",
        "Togo",
        "Tonga",
        "Tortola",
        "Trinidad and Tobago",
        "Truk",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos",
        "Tuvalu",
        "US Virgin Islands",
        "Uganda",
        "Ukraine",
        "Union Island",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Virgin Gorda",
        "Wallis and Futuna",
        "Yap",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ];

    var input = $("input");
    var results = $(".results");

    input.on("input", function() {
        var matches = [];
        var resultHtml = "";
        var results = $(".results");
        var val = input.val();

        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(val.toLowerCase()) == 0) {
                if (matches.push(countries[i]) >= 4) {
                    break;
                }
            }
        }

        for (var b = 0; b < matches.length; b++) {
            resultHtml += "<div class='result'>" + matches[b] + "</div>";
        }
        results.html(resultHtml);
        if (matches == "") {
            results.html("No results");
        }
    });

    //starts new

    results.on("mouseover", function(e) {
        //$(e.target).stopPropogation();
        $(e.target)
            .prev()
            .removeClass("highlight");
        $(e.target).addClass("highlight");
        $(e.target)
            .next()
            .removeClass("highlight");
    });

    results.on("mousedown", function(e) {
        input.val($(e.target).text());
        results.empty();
    });

    $(input).on("keydown", function(e) {
        var highlighted = $(".highlight");
        var res = $(".result");

        if (e.keyCode == "40") {
            if (highlighted.length == 0) {
                res.first().addClass("highlight");
            } else if (highlighted.index() == res.length - 1) {
                return;
            } else {
                highlighted.next().addClass("highlight");
                highlighted.removeClass("highlight");
            }
        }
    });

    $(input).on("keyup", function(e) {
        var highlighted = $(".highlight");
        var res = $(".result");

        if (e.keyCode == 38) {
            if (highlighted.length == 0) {
                res.last().addClass("highlight");
            } else if (highlighted.index() == 0) {
                return;
            } else {
                highlighted.prev().addClass("highlight");
                highlighted.removeClass("highlight");
            }
        }
    });

    $(input).on("keypress", function(e) {
        var highlighted = $(".highlight");
        var res = $(".result");

        if (e.keyCode == 13) {
            if (res.hasClass("highlight")) {
                input.val(highlighted.text());
                res.empty();
            }
        }
    });
    $(input).on("blur", function() {
        results.hide();
    });

    $(input).on("focus", function() {
        results.show();
    });

    // $(document).on("click", function(e) {
    //     if ($(e.target).hasClass("input")) {
    //         results.show();
    //     } else {
    //         results.hide();
    //     }
    // });
})();
