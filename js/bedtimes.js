TrueColours = TrueColours || {};

(function (ns) {
    'use strict';

    ns.BedTimes = function (listBedTimes) {
        this.bedTimes = listBedTimes || [];

        this.getCosMean = function () {
            var list = _.map(this.bedTimes, function (bt) {
                return Math.cos(bt.angle);
            });
            var sum = _.reduce(list, function (memo, cos) {
                return memo + cos;
            });
            return sum / this.bedTimes.length;
        };

        this.getSinMean = function () {
            var list = _.map(this.bedTimes, function (bt) {
                return Math.sin(bt.angle);
            });
            var sum = _.reduce(list, function (memo, sin) {
                return memo + sin;
            });
            return sum / this.bedTimes.length;
        };

        this.getAngleMean = function () {
            var sinMean = this.getSinMean();
            var cosMean = this.getCosMean();

            var arctanMean = Math.atan2(sinMean, cosMean);

            return ns.Helpers.normalizeQuadrant(sinMean, cosMean, arctanMean);
        };

        this.getTimeMean = function () {
            var hrs;
            var min;
            var angle = this.getAngleMean();
            var time = window.time = (24 * angle) / 360;


            min = ( ((time * 100) % 100) / 100 );   // fraction of decimal
            min = min * 60;                         // fraction of hour
            min = Math.round(min);

            hrs = Math.floor(time   );

            return min;
        };
    };

}(TrueColours));
