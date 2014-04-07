(function (ns) {
    'use strict';

    var BedTimes = ns.BedTimes = function () {
        var collection;

        // create new array instance
        collection = [];

        // use array constructor logic, if constructor aruguments
        collection = Array.apply(collection, arguments) || collection;

        // now the clever bit, add BedTimes related custom functions
        for (var method in BedTimes.prototype) {
            if (BedTimes.prototype.hasOwnProperty(method)) {
                collection[method] = BedTimes.prototype[method];
            }
        }

        return collection;
    };

    BedTimes.prototype = {
        getCosMean: function () {
            var list = _.map(this, function (bt) {
                return Math.cos(bt.angle);
            });
            var sum = _.reduce(list, function (memo, cos) {
                return memo + cos;
            });

            console.log('cos mean sum:', sum);
            console.log('cos mean length:', this.length);

            return sum / this.length;
        },

        getSinMean: function () {
            var list = _.map(this, function (bt) {
                return Math.sin(bt.angle);
            });
            var sum = _.reduce(list, function (memo, sin) {
                return memo + sin;
            });

            console.log('sin mean sum:', sum);
            console.log('sin mean length:', this.length);

            return sum / this.length;
        },

        getVectorMean: function () {
            var X = this.getCosMean();
            var Y = this.getSinMean();
            return Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2));
        },

        getAngleMean: function () {
            var sinMean = this.getSinMean();
            var cosMean = this.getCosMean();

            var arctanMean = Math.atan(sinMean / cosMean);

            console.log('(Y) mean sin:', sinMean);
            console.log('(X) mean cos:', cosMean);
            console.log('mean angle:', arctanMean * (180 / Math.PI));

            return ns.Helpers.normalizeQuadrant(sinMean, cosMean, arctanMean);
//            return arctanMean;
        },

        getTimeMean: function () {
            var hrs;
            var min;
            var angle = this.getAngleMean();

            var time = window.time = (24 * angle) / 360; // in hours

            console.log('time:', time);

            hrs = Math.floor(time);
            min = ( ((time * 100) % 100) / 100 );   // fraction of decimal
            min = min * 60;                         // fraction of hour
            min = Math.round(min);

            if (hrs < 10) {
                hrs = '0' + hrs.toString();
            }

            if (min < 10) {
                min = '0' + min.toString();
            }

            console.log('time:', time, 'hrs:', hrs, 'min:', min);

            return hrs + ':' + min;
        }
    };
})(TrueColours);
