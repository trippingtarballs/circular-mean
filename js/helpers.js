TrueColours = TrueColours || {};


TrueColours.Helpers = TrueColours.Helpers || {

    getCircularMean: function (listOfTimes) {
        'use strict';

        var bedTimes = [];

        _.each(listOfTimes, function (time) {
            bedTimes.push(new TrueColours.BedTime(time));
        }, this);

        return bedTimes;
    }

};
