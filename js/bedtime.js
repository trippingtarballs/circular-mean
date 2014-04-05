TrueColours = TrueColours || {};


TrueColours.BedTime = function BedTime (hours, minutes) {
    'use strict';

    this.hours = hours || 0;
    this.minutes = minutes || 0;
};


TrueColours.BedTime.prototype.getTime = function () {
    'use strict';

    var hrs = this.hours.toString();
    var min = this.minutes.toString();

    if (this.hours < 10) {
        hrs = '0' + hrs;
    }

    if (this.minutes < 10) {
        min = '0' + min;
    }

    return hrs + ':' + min;
};
