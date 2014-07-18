// used for module tests
define(['storage'], function (storage) {

    var getQuestions = function (module) {
        console.log('here is the test for ' + module);

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
            }
        ];
    };

    var getComponents = function (questions) {
        var comps = [];
        $.each(questions, function (i, q) {
            var div = $('<div>');
            div.append('<label>').html(q.text);

            $.each(q.answers, function (j, a) {
                div.append(
                    $('<input>', {
                        type: 'radio',
                        name: i,
                        value: a.text
                    }),
                    a.text
                );
            });
            comps.push(div);
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
