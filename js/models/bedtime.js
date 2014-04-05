TrueColours.Models = TrueColours.Models || {};

(function (ns) {
    'use strict';

    var BedTime = ns.BedTime = function (hours, minutes) {
        this.hours = hours || 0;
        this.minutes = minutes || 0;
    };

    _.extend(BedTime.prototype, {
        getTime: function () {
            var hrs = this.hours.toString();
            var min = this.minutes.toString();

            if (this.hours < 10) {
                hrs = '0' + hrs;
            }

            if (this.minutes < 10) {
                min = '0' + min;
            }

            return hrs + ':' + min;
        }

    });

})(TrueColours.Models);
