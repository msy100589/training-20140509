function DoubleManager()
{
    var applicants = [];

    this.affairs = [];

    this.interview = function(applicant) {
        applicants.push(applicant);

        if (applicant.sexy && applicant.hot) {
            this.affairs.push(applicant);
        }
    };
}

function SexyHotApplicant(name)
{
    this.name = name;
    this.sexy = true;
    this.hot = true;
}

var mgr = new DoubleManager();

(function() {
    var applicant = new SexyHotApplicant('Maria');

    mgr.interview(applicant);

    console.log('-----------------');
    console.log(mgr.affairs);
})();


(function() {
    var applicant = {
        name: 'Lorie',
        sexy: true,
        hot: true
    };

    mgr.interview(applicant);

    console.log('-----------------');
    console.log(mgr.affairs);
})();