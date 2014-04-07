TrueColours = window.TrueColours || {};

$(document).ready(function () {
    'use strict';

    var dataPoints = [
        336,
        356,
        359,
        11,
        350,
        334,
        357,
        358,
        358,
        19,
        7,
        6,
        6,
        334,
        21,
        348,
        330,
        342,
        354
    ];

    console.log('data:', dataPoints);

    var mean = window.mean = TrueColours.Helpers.getCircularMean(dataPoints);

    console.log('mean:', mean);

});
