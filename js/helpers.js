TrueColours = TrueColours || {};


TrueColours.Helpers = TrueColours.Helpers || {

    getArctanMean: function (sinMean, cosMean) {
        'use strict';

        var arctanMean = Math.atan2(sinMean, cosMean);

        // if sin is +ve and cos is -ve (ie 2nd quadrant)
        if (sinMean > 0 && cosMean < 0) {
            return 180 - arctanMean;
        }

        // if sin is -ve and cos is -ve (ie 3rd quadrant)
        if (sinMean < 0 && cosMean < 0){
            return 180 + arctanMean;
        }

        // if sin is -ve and cos is +ve (ie 4th quadrant)
        if (sinMean < 0 && cosMean > 0){
            return 360 - arctanMean;
        }

        return arctanMean;
    },


    getCosMean: function (bedTimes) {
        'use strict';

        var X = 0;

        _.each(bedTimes, function (bedTime) {
            X += bedTime.getCos();
        }, this);

        return X / bedTimes.length;
    },

    getSinMean: function (bedTimes) {
        'use strict';

        var Y = 0;

        _.each(bedTimes, function (bedTime) {
            Y += bedTime.getSin();
        }, this);

        return Y / bedTimes.length;
    },

    getCircularMean: function (listOfTimes) {
        'use strict';

        var bedTimes = [];

        _.each(listOfTimes, function (time) {
            bedTimes.push(new TrueColours.BedTime(time));
        }, this);


        var cosMean = this.getCosMean(bedTimes); // X
        var sinMean = this.getSinMean(bedTimes); // Y

        var angleMean = this.getArctanMean(sinMean, cosMean);


        return angleMean;
    }

};
