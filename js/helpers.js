TrueColours = TrueColours || {};


TrueColours.Helpers = TrueColours.Helpers || {

    getMinute: function (time) {
        'use strict';

        var index = time.indexOf(':');

        if (!index) {
            return false;
        }

        return time.slice(-index);
    },

    getHour: function (time) {
        'use strict';

        var index = time.indexOf(':');

        if (!index) {
            return false;
        }

        return time.slice(0, index);
    },

    getCircularMean: function (listOfTimes) {
        'use strict';

        var bedTimes = [];

        _.each(listOfTimes, function (time) {

            var hour = this.getHour(time);
            var mins = this.getMinute(time);

            var model = new TrueColours.BedTime(hour, mins);

            bedTimes.push(model);

        }, this);

        return bedTimes;
    }

};
