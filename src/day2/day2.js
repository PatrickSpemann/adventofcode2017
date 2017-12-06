module.exports = {
    normal: function (input) {
        var checksum = 0;
        var rows = inputToJson(input);
        for (var i = 0; i < rows.length; i++)
            checksum += largestDiff(rows[i]);
        return checksum;
    },
    evenly: function (input) {
        var checksum = 0;
        var rows = inputToJson(input);
        for (var i = 0; i < rows.length; i++)
            checksum += getPartialChecksum(rows[i]);
        return checksum;
    }
}

function inputToJson(input) {
    var result = [];
    var rows = input.split("\n");
    for (var i = 0; i < rows.length; i++) {
        var stringValues = rows[i].split("\t");
        var numValues = stringValues.map(function (element) {
            return parseInt(element);
        });
        result.push(numValues);
    }
    return result;
}
function largestDiff(row) {
    var max = Math.max.apply(null, row);
    var min = Math.min.apply(null, row);
    return Math.abs(max - min);
}
function getPartialChecksum(row) {
    for (var i = 0; i < row.length; i++) {
        var num = row[i];
        for (var k = 0; k < row.length; k++) {
            if (i === k)
                continue;
            var otherNum = row[k];
            if (num % otherNum === 0)
                return num / otherNum;
        }
    }
    return 0;
}