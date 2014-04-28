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

//
//describe("unit tests for getCircularMean() function", function () {
//    beforeEach(function () {
//        ga = function () {};  // mock-out any Google Analytics dependencies
//    });
//
//    it("should return the average time for a set of sleep-times", function () {
//        // build input data
//        var sleepTimes = [ '23:00', '22:30', '23:15', '01:30', '22:00' ];
//
//        var expected = '23:14';
//        var returned = TrueColours.Helpers.getCircularMean(sleepTimes);
//
//        // test the result
//        expect(returned).toBe.(expected);
//    });
//});
