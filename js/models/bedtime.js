TrueColours.Models = TrueColours.Models || {};

(function () {
    'use strict';

    TrueColours.Models.BedTime = function (hours, minutes) {
        this.hours = hours || 0;
        this.minutes = minutes || 0;
    };

    _.extend(TrueColours.Models.BedTime.prototype, {

        getTime: function () {
            return this.minutes + ':' + this.hours;
        }

    });

})();
