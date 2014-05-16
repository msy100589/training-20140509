function Manager()
{
    var applicants = [];

    this.interview = function(applicant) {
        console.log('interviewing ' + applicant.name);

        applicant.dateApplied = getCurrentDate();
        applicants.push(applicant);

        if (applicant.callback) {
            setTimeout(this.hireFirst, 10000); // 10 days
        }

        console.log('done interviewing ' + applicant.name);
        console.log('Manager\'s message: ' + applicant.name + ', we will be calling you after 10 days.');
    };

    this.hireFirst = function() {
        var applicant = applicants.shift();
        applicant.dateHired = getCurrentDate();
        applicant.callback('HIRED');
    };
}

function getCurrentDate()
{
    return new Date().toUTCString();
}

var mgr = new Manager();
var applicant = {
    name: 'Jose Ricardo',
    callback: function(result) {
        console.log('Calling: ' + this.name + ', Status: ' + result);
        console.log(applicant);
    }
};

mgr.interview(applicant);

var applicant2 = {
    name: 'Jose Marlon',
    callback: function(result) {
        console.log('Calling: ' + this.name + ', Status: ' + result);
        console.log(applicant2);
    }
};

mgr.interview(applicant2);