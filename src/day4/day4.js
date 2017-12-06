module.exports = {
    normal: function (input) {
        var count = 0;
        var lines = input.split("\n");
        for (var i = 0; i < lines.length; i++)
            if (!hasDoubleWords(lines[i]))
                count++;
        return count;
    },
    anagram: function (input) {
        var count = 0;
        var lines = input.split("\n");
        for (var i = 0; i < lines.length; i++)
            if (!hasAnagram(lines[i]))
                count++;
        return count;
    }
}
function hasDoubleWords(line) {
    var seenWords = [];
    var words = line.split(" ");
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var index = seenWords.indexOf(word);
        if (index !== -1)
            return true;
        else
            seenWords.push(word);
    }
    return false;
}
function hasAnagram(line) {
    var words = line.split(" ");
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        for (var k = i + 1; k < words.length; k++) {
            if (isAnagram(word, words[k]))
                return true;
        }
    }
    return false;
}
function isAnagram(word, otherWord) {
    var wChars = word.split("").sort().join("");
    var owChars = otherWord.split("").sort().join("");
    return wChars === owChars;
}