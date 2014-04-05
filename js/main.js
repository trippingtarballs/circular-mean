TrueColours = window.TrueColours || {};


$(document).ready(function () {
    'use strict';

    var dataPoints = [
        '23:00',
        '22:30',
        '23:15',
        '01:30',
        '22:00'
    ];

    console.log('data:', dataPoints);

    var helper = new TrueColours.Helpers();
    var mean = helper.getCircularMean(dataPoints);
    console.log('mean:', mean);

});
