$(document).ready(function () {
    "use strict";

    // make a function to get the weather object from the OpenWeatherMap API
    // base url should be 'http://api.openweathermap.org/data/2.5/forecast'

    //function to get average temp for day//

    const getMinMaxDayTemp = (data, day) => {
        const temps = data.list.slice(day * 8 - 8, day * 8)
            .reduce((prev, curr) => {
                prev.push(curr.main.temp);
                return prev;
            }, []).sort();
        return {min: temps.shift(), max: temps.pop()};
    };

    //FUNCTION TO ADD HTML//

    function addHtml(data) {
        var updateForecast = '';
        for (var i = 0; i < 3; i += 1) {
            var temp = getMinMaxDayTemp(data, i + 1);

            // updateForecast += '<div class = col s4>';
            updateForecast += '<div class="col s4 card-panel cyan black-text">';
            updateForecast += '<p>' + "High " + temp.max.toFixed(0) + "/ " + "Low " + temp.min.toFixed(0) + '</p>';
            updateForecast += '<p>Clouds: ' + data.list[i * 8].weather[0].description + '</p>';
            updateForecast += '<p>Humidity: ' + data.list[i * 8].main.humidity + '%</p>';
            updateForecast += '<p>Wind: ' + data.list[i * 8].wind.speed + " mph" + '</p>';
            updateForecast += '<p>Pressure: ' + data.list[i * 8].main.pressure + '</p>';
            updateForecast += '</div>';
            // updateForecast += '</div >';

        }
        return updateForecast;
    }

    ///look into .getfullyear to get the date added to the html


    $.get('http://api.openweathermap.org/data/2.5/forecast', {
        APPID: '88951cfde8161e5e0fff71ff83513be9',
        id:     4726206,
        units:'imperial'
        // dataType: 'jsonP'//This is when a webservice is expected to receive json
    }).done(function(data) {
        $('#weatherReport').append(addHtml(data));
    });

            // WEATHER MAP STARTS HERE

    // Set our map options
    var mapOptions = {
        zoom: 13,
        center: {
            lat:  29.426791,
            lng: -98.489602
        }
    };
    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var address = "8523 Blanco Rd, San Antonio, TX 78216";
    var geocoder = new google.maps.Geocoder();

    // Geocode our address
    geocoder.geocode({ "address": address }, function(results, status) {

        // Check for a successful result
        if (status == google.maps.GeocoderStatus.OK) {
            // Recenter the map over the address
            map.setCenter(results[0].geometry.location);
        } else {
            alert("Geocoding was not successful - STATUS: " + status);
        }
    });
    var marker = new google.maps.Marker({
        position: {lat: 29.544205, lng: -98.507507},
        map: map
    });
    var infowindow = new google.maps.InfoWindow({
        content: "Brasa Chicken: Delicious Peruvian Restaurant"
    });
    infowindow.open(map, marker);








    // console.log(data);
    // console.log the current weather description
    //         console.log(data.list[0].weather[0].description);
    // console.log the humidity of the 2nd day
    //         console.log(data.list[11].main.humidity);
    // console.log the humidity of all the days (use a for loop)
    //         for (var i = 0; i < data.list.length; i += 1) {         //this will loop for all 3 days remember 3hr block intervals//
    //             console.log(data.list[i].main.humidity);
    //         };
    // console.log the temperature of the 3rd day in celsius
    // console.log the temperature of the 3rd day in Fahrenheit
    //         console.log(data.list[i].main.temp);
    // console.log all types of information you will ultimately display for a single day in the 3-day forecast div
    // console.log all type of information you will ultimately display for all days in the 3-day forecast divs
    //         console.log(getMinMaxDayTemp(data, 2));
    // write html and css to make/style a three-day forecast set of divs (may use design from curriculum)
    // create a function to append specific parts of the OpenWeatherMap map object to the DOM and call it in the .done() of the OpenWeatherMap map GET request.
    // remember to first console.log specific data from the OpenWeatherMap object, then work on adding to the DOM
    // read and reread the curriculum and OpenWeatherMap docs carefully on how to get an image of the weather forecast
    // hint: 'http://openweathermap.org/img/w/' + whateverTheWeatherIconValueIs
    // verify that the OpenWeatherMap data populates by hard coding in lat and lon values
    // create lat and lon variables to hold lat and lon values.
    // add lat and lon properties to the function that calls the OpenWeatheMap API GET request
    // add an input field for lat and lon with button that fires a new request to the OpenWeatherMap API and passes the lat and lon values from the input fields into the request.


});
