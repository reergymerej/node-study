// used to get/set which modules have been completed
define(function () {

    var finished = [];

    return {
        getFinished: function () {
            if (!finished.length) {
                finished = localStorage.getItem('finished');
                if (finished) {
                    finished = JSON.parse(finished);
                } else {
                    finished = [];
                }
            }

            return finished;
        },
        setFinished: function (module) {
            finished.push(module);
            localStorage.setItem('finished', JSON.stringify(finished));
        },

        isFinished: function (module) {
            var finishedModules = this.getFinished();
            return finishedModules.indexOf(module) > -1;
        }
    };
});