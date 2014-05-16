/**
 * Run in browser with jQuery
 */
(function() {
    var applicants = [];

    function Manager(responseTime)
    {
        this.interview = function(applicant) {
            console.log('interviewing ' + applicant.name);

            applicant.dateApplied = getCurrentDate();
            applicants.push(applicant);

            console.log('done interviewing ' + applicant.name);
            console.log('Manager\'s message: ' + applicant.name + ', we will be calling you after ' + responseTime + ' days.');

            var applicantsCount = applicants.length;

            return $.Deferred(function(deferred) {
                setTimeout(function() {
                    if (applicantsCount % 3 === 0) {
                        deferred.resolve('HIRED');
                    }
                    else {
                        deferred.resolve('TRY_AGAIN');
                    }
                }, responseTime);
            }).promise();
        };
    }

    // register to global
    window.Manager = Manager;
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
var interview1 = mgr.interview(applicant).done(applicantMgr1Callback);


//====== second interview ===============
var applicantMgr2Callback = function(response) {
    console.log('>> Manager2 Response: ' + response);
};

var mgr2 = new Manager(1000);

console.log('--Interview with Manager 2');
var interview2 = mgr2.interview(applicant, applicantMgr2Callback).done(applicantMgr2Callback);


//====== last interview ===============
$.when(interview1, interview2).done(function() {
    var applicantMgr3Callback = function(response) {
        console.log('>> Manager3 Response: ' + response);
    };

    var mgr3 = new Manager(2000);

    console.log('--Interview with Manager 3');
    mgr3.interview(applicant).done(applicantMgr3Callback);
});

console.log('');