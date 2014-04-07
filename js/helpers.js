TrueColours = TrueColours || {};

(function (ns) {
    'use strict';

    ns.Helpers = {
        normalizeQuadrant: function (sin, cos, theta) {

            // if sin is +ve and cos is -ve (ie 2nd quadrant)
            if (sin > 0 && cos < 0) {
                return 180 - theta;
            }

            // if sin is -ve and cos is -ve (ie 3rd quadrant)
            if (sin < 0 && cos < 0) {
                return 180 + theta;
            }

            // if sin is -ve and cos is +ve (ie 4th quadrant)
            if (sin < 0 && cos > 0) {
                return 360 - theta;
            }

            return theta;
        },

        getCircularMean: function (listTimes) {
            var list = [];

            _.each(listTimes, function (time) {
                list.push(new ns.BedTime(time));
            });

            var bedTimes = new ns.BedTimes(list);

            return bedTimes.getTimeMean();
        }

    };

}(TrueColours));
