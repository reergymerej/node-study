$(function () {

    requirejs.config({
        urlArgs: 'bust=' + Date.now()
    });

    require(['modules', 'tests'], function (modules, tests) {
        

        var ul = $('#modules');
        var prereqList = $('#prereqs');
        var iframe = $('iframe');
        var currentModule;
        var form = $('form');
        var toggle = $('#toggle');
        var questions = $('#questions');

        var markFinishedModules = function () {
          $('li').each(function (i, li) {
            var module = $(li).data('module');

            li = $(li);
            if (modules.isFinished(module)) {
                li.addClass('finished');
            } else {
                if (!modules.allPrereqsDone(module)) {
                    li.addClass('not-available');
                } else {
                    li.removeClass('not-available');
                }
            }

          });
        };

        var loadTest = function (module) {
            var testQuestions = tests.getTest(module);
            questions.empty();

            $.each(testQuestions, function (i, q) {
                questions.append(q);
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

        // handle form submission
        form.on('submit', function () {
            var pass = $('[name="pass"]', this).val() === 'pass';

            if (pass) {
                modules.setFinished(currentModule);
                markFinishedModules();
            }

            return false;
        });
    });
});
