/**
 * Q: What is the printed result?
 */
(function() {

    var totalChildren = 0;
    var children = [];

    function addChild()
    {
        totalChildren++;
        children.push("Child - " + totalChildren);
    }

    function killFirstChild()
    {
        children.shift();
    }

    function printChildren()
    {
        console.log('---- children -----');
        for (var idx in children) {
            console.log(children[idx]);
        }
    }

    addChild();
    addChild();
    addChild();
    addChild();

    killFirstChild();
    printChildren();

    killFirstChild();
    printChildren();

})();