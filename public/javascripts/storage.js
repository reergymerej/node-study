// used to get/set which modules have been completed
/* global define */
define(function () {

    var finished = [];

    var save = function () {
        localStorage.setItem('finished', JSON.stringify(finished));
    };

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
            save();
        },

        isFinished: function (module) {
            var finishedModules = this.getFinished();
            return finishedModules.indexOf(module) > -1;
        },

        clearHistory: function (callback) {
            finished = [];
            save();
            callback();
        },

        toggleFinished: function (module, callback) {
            if (this.isFinished(module)) {
                finished.splice(finished.indexOf(module), 1);
                save();
                callback();
            } else {
                this.setFinished(module);
                callback();
            }
        }
    };
});