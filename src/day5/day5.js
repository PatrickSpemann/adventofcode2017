module.exports = {
    normal: function (input, part2) {
        var sequence = prepareInput(input);
        var steps = 0;
        var index = 0;
        var modFunction = part2 ? modifyExtra : modifyValue;
        while (index < sequence.length) {
            var value = sequence[index];
            var nextIndex = index + value;
            sequence[index] = modFunction(sequence[index]);
            index = nextIndex;
            steps++;
        }
        return steps;
    }
}
function prepareInput(input) {
    var sequence = input.split(",");
    return sequence.map(function (element) {
        return parseInt(element);
    });
}
function modifyValue(value) {
    return value + 1;
}
function modifyExtra(value) {
    return value >= 3 ? (value - 1) : (value + 1);
}