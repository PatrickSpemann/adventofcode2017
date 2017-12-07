module.exports = {
    findRoot: findRoot,
    weight: weight
}
var structuredInput = {};
function findRoot(input) {
    structuredInput = structureInput(input);
    for (var name in structuredInput) {
        if (structuredInput.hasOwnProperty(name)) {
            if (isRoot(name, structuredInput))
                return name;
        }
    }
    return "NO_ROOT_FOUND";
}
function weight(input) {
    structuredInput = structureInput(input);
    var rootName = findRoot(input);
    calcWeigth(structuredInput[rootName]);
}
//for the real input this writes 3 logs, indicating 3 imbalances. May be wrong, but the first one was accepted as the correct answer. ¯\_(ツ)_/¯
function calcWeigth(obj) {
    var res = obj.weight;
    var imbalance = false
    var childWeights = [];
    for (var i = 0; i < obj.children.length; i++) {
        var subWeight = calcWeigth(structuredInput[obj.children[i]]);
        if (childWeights.length > 0 && childWeights.indexOf(subWeight) === -1)
            imbalance = true;
        childWeights.push(subWeight);
        res += subWeight;
    }
    if (imbalance) {
        var min = 1000000000;
        var max = -1;
        var minIdx = 0;
        var maxIdx = 0;
        for (var i = 0; i < childWeights.length; i++) {
            if (childWeights[i] < min) {
                min = childWeights[i];
                minIdx = i;
            }
            if (childWeights[i] > max) {
                max = childWeights[i];
                maxIdx = i;
            }
        }
        var diff = max - min;
        console.log(structuredInput[obj.children[maxIdx]].weight - diff);
    }
    return res;
}
function structureInput(input) {
    var result = {};
    var lines = input.split("\n");
    for (var i = 0; i < lines.length; i++) {
        var parts = lines[i].split(" ");
        var name = parts[0];
        var weight = parseInt(parts[1].substring(1, parts[1].length - 1));
        var children = [];
        var childrenStartPos = lines[i].indexOf("->");
        if (childrenStartPos !== -1) {
            var childrenString = lines[i].substring(childrenStartPos + 3);
            children = childrenString.split(", ");
        }
        result[name] = {
            weight: weight,
            children: children
        }
    }
    return result;
}
function isRoot(possibleRootName) {
    for (var name in structuredInput) {
        if (structuredInput.hasOwnProperty(name) && name !== possibleRootName) {
            var otherObj = structuredInput[name];
            for (var i = 0; i < otherObj.children.length; i++) {
                if (otherObj.children[i] === possibleRootName)
                    return false;
            }
        }
    }
    return true;
}