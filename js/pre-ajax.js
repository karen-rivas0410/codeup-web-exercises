$(document).ready(function() {
"use strict"; //when using this it has to be inside the document ready// it is function scope and would be better inside the ready document

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
    //
    // // $("div").children().hide();
    //
    // $("#add-names-btn").click(function() {
    //         $("ul").html();
    // });
    //
    //
    //
    // //could use a forEach loop IT IS MORE READABLE//or could use a each jquery functions//
    //
    // function adUlList(input) {
    //     for (var i = 0; i >= input.length; i += 0) {
    //         console.log(input[i].name);
    //     }
    //
    // }


    $.ajax({
        url: "https://swapi.co/api/planets",
        type: "GET",
        data: {
            search: "Yavin IV"
        }
    }).done(function(data) {
        console.log(data.results[0].diameter);
    }).fail(function() {
        console.log("Request failed");
    });



    // $("#name-list").html(function () {
    //     for (var i = 0; i >= people.length; i += 0) {
    //         $("").children().first().css("color", )
    //     }
    // });



        // people.name.forEach(function(e) {
        //     console.log(e);
        //
        // })



});