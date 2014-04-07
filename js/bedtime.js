TrueColours = TrueColours || {};

(function (ns) {
    'use strict';

    ns.BedTime = function (time) {
        this.time = time || '00:00';

        this.minutes = (function (that) {
            var index = that.time.indexOf(':');
            var slice = that.time.slice(-index);
            return parseInt(slice, 10);
        }(this));

        this.hours = (function (that) {
            var index = that.time.indexOf(':');
            var slice = that.time.slice(0, index);
            return parseInt(slice, 10);
        }(this));

        this.angle = (function (that) {
            var hrs = that.hours;
            var min = that.minutes / 60;    // fraction of decimal
            return (360 * (hrs + min)) / 24;
        }(this));
    };
//
//    _.extend(BedTime.prototype, {
//        getCos: function () {
//            return Math.cos(this.angle);
//        },
//        getSin: function () {
//            return Math.sin(this.angle);
//        }
//    });
//
}(TrueColours));
