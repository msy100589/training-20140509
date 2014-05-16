/**
 * Run in browser
 */
var name = 'Dale';

function HouseOf(name)
{
    this.name = name;

    this.printName = function()
    {
        console.log('Name: ' + this.name);
    };
}

var house = new HouseOf('Marlon');
house.printName();

var house2 = house;
house2.printName();

var pn = house.printName;
pn();
