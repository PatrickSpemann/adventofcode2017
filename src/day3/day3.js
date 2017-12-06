module.exports = {
    normal: function (input) {
        var base = getBase(input);
        var sideLength = base - 1;
        var corners = getCorners(base, sideLength);
        return getManhattanDistance(corners, sideLength, input);
    }
}
function getBase(input) {
    var base = 1;
    var squared = base * base;
    while (squared < input) {
        base += 2;
        squared = base * base;
    }
    return base;
}
function getCorners(base, sideLength) {
    var squared = base * base;
    var result = [];
    for (var i = 0; i < 5; i++)
        result.push(squared - i * (sideLength));
    return result;
}
function getManhattanDistance(corners, sideLength, input) {
    for (var i = 0; i < corners.length; i++) {
        var corner = corners[i];
        var distance = Math.abs(corner - input);
        if (distance <= sideLength / 2)
            return sideLength - distance;
    }
    return 0;
}