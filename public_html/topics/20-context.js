function Manager()
{
    var _this = this;

    this.applicants = [];
    this.hiredApplicants = [];

    this.interview = function(applicant) {
        console.log('interviewing ' + applicant.name);

        applicant.dateApplied = getCurrentDate();
        this.applicants.push(applicant);

        if (applicant.callback) {
            setTimeout(function() {
                _this.hireFirst();
            }, 3000); // 10 days
        }

        console.log('done interviewing ' + applicant.name);
        console.log('Manager\'s message: ' + applicant.name + ', we will be calling you after 10 days.');
    };

    this.hireFirst = function() {
        var applicant = this.applicants.shift();
        applicant.dateHired = getCurrentDate();
        applicant.callback('HIRED');

        this.hiredApplicants.push(applicant);
    };
}

function getCurrentDate()
{
    return new Date().toUTCString();
}

var mgr = new Manager();
var applicant = {
    name: 'Jose',
    callback: function(result) {
        console.log('Calling: ' + this.name + ', Status: ' + result);
        console.log(applicant);
    }
};

mgr.interview(applicant);