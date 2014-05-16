function DoubleManager()
{
    this.affairs = [];
    this.meetUp = function(person) {
        if (person.sexy && person.hot) {
            this.affairs.push(person);
        }
    };
}

function GirlFriend()
{
    this.affairs = [];
}

var mgr = new DoubleManager();
var gf = new GirlFriend();

var applicant = {
    name: 'Lorie',
    sexy: true,
    hot: true
};

mgr.meetUp.call(gf, applicant);

console.log("-- manager's affairs --");
console.log(mgr.affairs);

console.log("-- gf's affairs --");
console.log(gf.affairs);

