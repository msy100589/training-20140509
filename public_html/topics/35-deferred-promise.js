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
                    if (applicantsCount % 2 === 0) {
                        deferred.resolve();
                    }
                    else {
                        deferred.reject();
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
var applicantMgr1Callback = function() {
    console.log('>> Manager1 Response: hired');
};

var mgr = new Manager(3000);

console.log('--Interview with Manager 1');
var interview1 = mgr.interview(applicant).done(applicantMgr1Callback);


//====== second interview ===============
var applicantMgr2Callback = function() {
    console.log('>> Manager2 Response: hired');
};

var mgr2 = new Manager(1000);

console.log('--Interview with Manager 2');
var interview2 = mgr2.interview(applicant, applicantMgr2Callback).done(applicantMgr2Callback);


//====== last interview ===============
$.when(interview1, interview2)
        .done(function() {
            var applicantMgr3Callback = function() {
                console.log('>> Manager3 Response: hired');
            };

            var mgr3 = new Manager(2000);

            console.log('--Interview with Manager 3');
            mgr3.interview(applicant).done(applicantMgr3Callback);
        })
        .fail(function() {
            console.log('Some or all of the interviews failed');
        })
        .always(function() {
            console.log("After the two interviews had managers' reply.");
            console.log('Interview 1: ' + interview1.state());
            console.log('Interview 2: ' + interview2.state());
        });

console.log('');