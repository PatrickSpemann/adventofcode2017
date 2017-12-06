module.exports = {
    normal: function (input, part2) {
        var seenConfigurations = [];
        var count = 0;
        var repeatResult = -1;
        while (repeatResult === -1) {
            seenConfigurations.push(input.slice());
            var highestIndex = getHighestIndex(input);
            var valueToDistribute = input[highestIndex];
            input[highestIndex] = 0;
            var index = highestIndex;
            while (valueToDistribute > 0) {
                index++;
                if (index >= input.length)
                    index = 0;
                input[index]++;
                valueToDistribute--;
            }
            count++;
            repeatResult = repeatedConfiguration(seenConfigurations, input);
        }
        return part2 ? repeatResult : count;
    }
}
function repeatedConfiguration(seen, config) {
    for (var i = 0; i < seen.length; i++)
        if (arraysEqual(seen[i], config))
            return seen.length - i;
    return -1;
}
function getHighestIndex(arr) {
    var maxVal = 0;
    var maxIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if (val > maxVal) {
            maxVal = val;
            maxIndex = i;
        }
    }
    return maxIndex;
}
function arraysEqual(a, b) {
    for (var i = 0; i < a.length; i++)
        if (a[i] !== b[i])
            return false;
    return true;
}