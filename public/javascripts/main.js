/* global requirejs, require */

$(function () {

    requirejs.config({
        urlArgs: 'bust=' + Date.now()/*,
        d3: 'http://d3js.org/d3.v3.min'*/
    });

    require(['modules', 'tests'/*, 'd3'*/], function (modules, tests) {



        // return;
        

        var ul = $('#modules');
        var prereqList = $('#prereqs');
        var iframe = $('iframe');
        var currentModule;
        var form = $('form');
        var toggle = $('#toggle');
        var questions = $('#questions');
        var message = $('#message');
        var lastMessageTimeout;

        var showMessage = function (msg) {
            message.html(msg).slideDown();
            clearTimeout(lastMessageTimeout);
            lastMessageTimeout = setTimeout(function () {
                message.slideUp();
            }, 5000);
        };

        var markFinishedModules = function () {
          $('li').each(function (i, li) {
            var module = $(li).data('module');

            li = $(li);
            if (modules.isFinished(module)) {
                li.addClass('finished');
            } else {
                li.removeClass('finished');
                if (!modules.allPrereqsDone(module)) {
                    li.addClass('not-available');
                } else {
                    li.removeClass('not-available');
                }
            }
          });
        };

        var loadTest = function (module) {
            tests.getTest(module, function (testQuestions) {

                if (!testQuestions.length) {
                    showMessage('unable to load test ' + module);
                } else {
                    questions.empty();
                    $.each(testQuestions, function (i, q) {
                        questions.append(q);
                    });
                    // form.append(questions);
                }
            });
        };

        // create the clickable item for each module
        $.each(modules.getModules(), function (module) {
            var li = $('<li>' + module + '</li>');
            li.addClass('clickable');
            li.data('module', module);
            ul.append(li);
        });

        markFinishedModules();

        ul.delegate('li', 'click', function () {
            var li = $(this);
            currentModule = li.data('module');

            if (modules.allPrereqsDone(currentModule)) {
                prereqList.html('');
                iframe.attr('src', 'http://nodejs.org/api/' + currentModule + '.html');
                toggle.show();
                questions.empty();
                form.show();
                loadTest(currentModule);
            } else {
                form.hide();
                iframe.hide();
                toggle.hide();
                prereqList.html(modules.getPrereqs(currentModule).join(', '));
            }

            $('li').removeClass('active');
            li.addClass('active');
        });

        // toggle iframe
        toggle.on('click', function () {
            iframe.toggle();
        });

        $('#clear').on('click', function () {
            modules.clearHistory(function () {
                markFinishedModules();
            });
        });

        // handle form submission
        form.on('submit', function () {

            var pass = true;

            // get the selected values
            var answers = form.serializeArray();

            var questions = $('.question');
            questions.removeClass('wrong');

            if (questions.length !== answers.length) {
                pass = false;
            } else {
                // for each, find the element
                $.each(answers, function (i, answer) {
                    var selectedAnswer = $('input[name="' + answer.name +
                        '"][value="' + answer.value + '"]');

                    var isCorrect = false;
                    
                    if (selectedAnswer.length) {
                        isCorrect = !!(selectedAnswer && selectedAnswer.attr('correct'));
                    }

                    if (!isCorrect) {
                        pass = false;
                        selectedAnswer.closest('.question').addClass('wrong');
                    }
                });

                if (pass) {
                    modules.setFinished(currentModule);
                    markFinishedModules();
                }
            }

            return false;
        });

        $('#finished').on('click', function () {
            modules.toggleFinished(currentModule, function () {
                markFinishedModules();
            });
        });
    });
});
