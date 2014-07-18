// used for module tests
/* global define */
define(['storage'], function (storage) {

    var testCache = {};

    var getQuestions = function (module, callback) {

        if (testCache[module]) {
            callback(testCache[module]);
        } else {

            $.ajax({
                dataType: 'json',
                url: 'tests/' + module + '.json',
                // url: 'tests/' + 'foo' + '.json',
                success: function (resp) {
                    testCache[module] = resp.questions;
                    callback(testCache[module]);
                },
                error: function (resp) {
                    callback([]);
                }
            });
        }
    };

    var getComponents = function (questions) {
        var comps = [];
        $.each(questions, function (i, q) {
            var questionDiv = $('<div>', {
                class: 'question'
            });
            questionDiv.append($('<label>').html(q.text));

            $.each(q.answers, function (j, a) {
                var div = $('<div>');
                div.append(
                    $('<input>', {
                        type: 'radio',
                        name: i,
                        value: a.text,
                        correct: a.correct
                    }),
                    a.text
                );

                questionDiv.append(div);
            });
            comps.push(questionDiv);
        });
        return comps;
    };

    return {
        getTest: function (module, callback) {
            getQuestions(module, function (questions) {
                callback(getComponents(questions));
            });
        }
    };
});
