(function (ns) {
    'use strict';

    ns.BedTime = function (time) {
        this.time = time || '00:00';

        this.inMinutes = (function (that) {
            var time = that.time;
            var index = time.indexOf(':');

            var total = 0;
            total += parseInt(time.slice(-index), 10);          // minutes
            total += parseInt(time.slice(0, index), 10) * 60;   // hrs in mins

            return total;
        }(this));

        this.angle = (function (that) {
            return (2 * Math.PI * that.inMinutes) / (24 * 60);
        }(this));
    };
})(TrueColours);
