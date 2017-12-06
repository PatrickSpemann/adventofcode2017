module.exports = {
    normal: function (numAsString) {
        var sum = 0;
        for (var i = 0; i < numAsString.length; i++) {
            var digit = parseInt(numAsString[i]);
            var compareDigit = parseInt(numAsString[i + 1]);
            if (isNaN(compareDigit))
                compareDigit = parseInt(numAsString[0]);
            if (digit === compareDigit)
                sum += digit;
        }
        return sum;
    },
    halfway: function (numAsString) {
        var sum = 0;
        var jumpDistance = numAsString.length / 2;
        for (var i = 0; i < numAsString.length; i++) {
            var digit = parseInt(numAsString[i]);
            var compareDigit = parseInt(numAsString[i + jumpDistance]);
            if (isNaN(compareDigit)) {
                var index = (i + jumpDistance) - numAsString.length;
                compareDigit = parseInt(numAsString[index]);
            }
            if (digit === compareDigit)
                sum += digit;
        }
        return sum;
    }
}