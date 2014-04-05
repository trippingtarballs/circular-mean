TrueColours = TrueColours || {};


TrueColours.BedTime = function BedTime(time) {
    'use strict';

    this.time = time;
};

TrueColours.BedTime.prototype.getHours = function () {
    'use strict';

    var index = this.time.indexOf(':');
    var slice = this.time.slice(0, index);

    return parseInt(slice, 10);
};

TrueColours.BedTime.prototype.getMinutes = function () {
    'use strict';

    var index = this.time.indexOf(':');
    var slice = this.time.slice(-index);

    return parseInt(slice, 10);
};

TrueColours.BedTime.prototype.getAngle = function () {
    'use strict';

    var hrs = this.getHours();
    var min = this.getMinutes() / 60;  // take minutes as decimal fraction

    var time = hrs + min;

    return (360 * time) / 24;
};

TrueColours.BedTime.prototype.getCos = function () {
    'use strict';

    var angle = this.getAngle();

    return Math.cos(angle);
};

TrueColours.BedTime.prototype.getSin = function () {
    'use strict';

    var angle = this.getAngle();

    return Math.sin(angle);
};
