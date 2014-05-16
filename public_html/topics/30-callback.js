(function() {
    var applicants = [];

    function Manager(responseTime)
    {
        this.interview = function(applicant, callback) {
            console.log('interviewing ' + applicant.name);

            applicant.dateApplied = getCurrentDate();
            applicants.push(applicant);

            var applicantsCount = applicants.length;

            if (callback) {
                setTimeout(function() {
                    if (applicantsCount % 3 === 0) {
                        callback('HIRED');
                    }
                    else {
                        callback('TRY_AGAIN');
                    }
                }, responseTime);
            }

            console.log('done interviewing ' + applicant.name);
            console.log('Manager\'s message: ' + applicant.name + ', we will be calling you after ' + responseTime+ ' days.');
        };
    }

    // register to global
    global.Manager = Manager;
})();

function getCurrentDate()
{
    return new Date().toUTCString();
}


var applicant = {
    name: 'Jose'
};

//====== first interview ===============
var applicantMgr1Callback = function(response) {
    console.log('>> Manager1 Response: ' + response);
};

var mgr = new Manager(3000);

console.log('--Interview with Manager 1');
mgr.interview(applicant, applicantMgr1Callback);


//====== second interview ===============
var applicantMgr2Callback = function(response) {
    console.log('>> Manager2 Response: ' + response);
};

var mgr2 = new Manager(1000);

console.log('--Interview with Manager 2');
mgr2.interview(applicant, applicantMgr2Callback);

