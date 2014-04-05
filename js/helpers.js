TrueColours = TrueColours || {};


TrueColours.Helpers = function Helpers() {
    'use strict';

    this.getMinute = function (time) {
        var index = time.indexOf(':');

        if (!index) {
            return false;
        }

        return time.slice(-index);
    };

    this.getHour = function (time) {
        var index = time.indexOf(':');

        if (!index) {
            return false;
        }

        return time.slice(0, index);
    };

    this.getCircularMean = function (listOfTimes) {

        var bedTimes = [];

        _.each(listOfTimes, function (time) {

            var hour = this.getHour(time);
            var mins = this.getMinute(time);

            var model = new TrueColours.BedTime(hour, mins);

            bedTimes.push(model);

        }, this);

        return bedTimes;
    };
};
