(function (ns) {
    'use strict';

    ns.Helpers = {
        normalizeQuadrant: function (sin, cos, theta) {

            // if sin is +ve and cos is -ve (ie 2nd quadrant)
            if (sin > 0 && cos < 0) {
                return Math.PI - theta;
            }

            // if sin is -ve and cos is -ve (ie 3rd quadrant)
            if (sin < 0 && cos < 0) {
                return Math.PI + theta;
            }

            // if sin is -ve and cos is +ve (ie 4th quadrant)
            if (sin < 0 && cos > 0) {
                return (2 * Math.PI) - Math.abs(theta);
            }

            return theta;
        },

        getCircularMean: function (listTimes) {
            var collection = new ns.BedTimes();

            _.each(listTimes, function (time) {
                collection.push(new ns.BedTime(time));
            });

            return collection.getTimeMean();
        }

    };

})(TrueColours);
