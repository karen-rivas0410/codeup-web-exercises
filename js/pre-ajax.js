"use strict";
$(document).ready(function() {

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

    $("div").children().hide();

    $("#add-names-btn").click(function() {
        $("ul").slideToggle();
    });



    $("#name-list").html(function () {
        for (var i = 0; i >= people.length; i += 0) {
            $("").children().first().css("color", )
        }
    });
        // people.name.forEach(function(e) {
        //     console.log(e);
        //
        // })



});