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
            var list = _.map(this, function (bedTime) {
                return Math.cos(bedTime.angle);
            });

            var sum = _.reduce(list, function (memo, cos) {
                return memo + cos;
            });

            return sum / this.length;
        },

        getSinMean: function () {
            var list = _.map(this, function (bedTime) {
                return Math.sin(bedTime.angle);
            });

            var sum = _.reduce(list, function (memo, sin) {
                return memo + sin;
            });

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

            return ns.Helpers.normalizeQuadrant(sinMean, cosMean, arctanMean);
        },

        getTimeMean: function () {
            var time = (24 * this.getAngleMean()) / (2 * Math.PI);

            // isolate mantissa, and convert from decimal to mins
            var min = Math.round(( ((time * 100) % 100) / 100 ) * 60);
            var hrs = Math.floor(time);

            if (hrs < 10) {
                hrs = '0' + hrs.toString();
            }

            if (min < 10) {
                min = '0' + min.toString();
            }

            console.log('time:', time);
            console.log('hrs:', hrs, 'min:', min);

            return hrs + ':' + min;
        }
    };
})(TrueColours);
