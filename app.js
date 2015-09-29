'use strict';

const shifts = [
    [1800, 2300],
    [0800, 1300],
    [1200, 1800],
    [0800, 1400],
    [0800, 1200],
    [1300, 1700],
    [1400, 1800],
    [1300, 1800],
    [1800, 2300],
    [0900, 1300],
    [1800, 2200],
    [1900, 2300],
];

function compare(t1, t2) {
    if (t1[0] > t2[0]) return +1;
    if (t1[0] < t2[0]) return -1;
    if (t1[1] > t2[1]) return +1;
    if (t1[1] < t2[1]) return -1;
    return 0;
}

const sortedShifts = shifts.sort(compare);

const bins = [];
let minimum;

function bin(shift) {
    if (!minimum || shift[1] < minimum) {
        minimum = shift[1];
    }
    if (shift[0] < minimum) {
        bins.push([shift]);
    }
}

sortedShifts.forEach(bin);

console.log(bins);
console.log(minimum);
