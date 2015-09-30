'use strict';

var shifts = [
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

function sortShifts(t1, t2) {
    if (t1[0] > t2[0]) return +1;
    if (t1[0] < t2[0]) return -1;
    if (t1[1] > t2[1]) return +1;
    if (t1[1] < t2[1]) return -1;
    return 0;
}

function sortBins(b1, b2) {
    var b1Max = b1.reduce(maximum, 0);
    var b2Max = b2.reduce(maximum, 0);

    if (b1Max > b2Max) return +1;
    if (b1Max < b2Max) return -1;
    return 0;
}

function maximum(max, shift) {
    if (shift[1] > max) {
        max = shift[1];
    }
    return max;
}

var sortedShifts = shifts.sort(sortShifts);
var bins = [];

function bin(shift) {
    bins.sort(sortBins);
    for (var i = 0; i < bins.length; i++) {
        if (shift[0] < bins[i].reduce(maximum, 0)) continue;
        bins[i].push(shift);
        return;
    }
    bins.push([shift]);
}

sortedShifts.forEach(bin);

console.log(bins);
