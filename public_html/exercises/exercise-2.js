/**
 * Q: How to make the local functions available to the outside world?
 */
(function() {

    var totalChildren = 0;
    var children = [];

    global.addChild = function addChild()
    {
        totalChildren++;
        children.push("Child - " + totalChildren);
    };

    global.killFirstChild = function killFirstChild()
    {
        children.shift();
    };

    global.printChildren = function printChildren()
    {
        console.log('---- children -----');
        for (var idx in children) {
            console.log(children[idx]);
        }
    };

})();

addChild();
addChild();
addChild();
addChild();

killFirstChild();
printChildren();

killFirstChild();
printChildren();