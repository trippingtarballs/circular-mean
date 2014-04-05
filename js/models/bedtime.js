TrueColours.Models = TrueColours.Models || {};

(function (ns) {
    'use strict';

    var BedTime = ns.BedTime = function (hours, minutes) {
        this.hours = hours || 0;
        this.minutes = minutes || 0;
    };

    _.extend(BedTime.prototype, {
        getTime: function () {
            return this.minutes + ':' + this.hours;
        }

    });

})(TrueColours.Models);
