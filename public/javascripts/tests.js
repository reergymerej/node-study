// used for module tests
/* global define */
define(['storage'], function (storage) {

    var testCache = {};

    var rand = function (min, max) {
        return Math.random() * (max - min) + min;
    };

    var shuffle = function (arr) {
        var newArr = [];
        arr = arr.slice();

        while (arr.length) {
            newArr.push(arr.splice(rand(0, arr.length - 1), 1)[0]);
        }

        return newArr;
    };

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

        questions = shuffle(questions);

        $.each(questions, function (i, q) {
            var questionDiv = $('<div>', {
                class: 'question'
            });
            questionDiv.append($('<label>').html(q.text));
            q.answers = shuffle(q.answers);

            $.each(q.answers, function (j, a) {
                var div = $('<div>');
                div.append(
                    $('<input>', {
                        type: 'radio',
                        name: i,
                        // value: a.text,
                        value: i + '' + j,
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
