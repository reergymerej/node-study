// used for module tests
define(['storage'], function (storage) {

    var getQuestions = function (module) {
        return [
            {
                text: 'Would you like to pass or fail?',
                answers: [
                    {
                        text: 'pass',
                        correct: true
                    },

                    {
                        text: 'fail'
                    }
                ]
            },

            {
                text: 'select green',
                answers: [
                    {
                        text: 'blue'
                    },

                    {
                        text: 'green',
                        correct: true
                    }
                ]
            }
        ];
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
        getTest: function (module) {
            var questions = getQuestions(module);
            return getComponents(questions);
        }
    };
});
