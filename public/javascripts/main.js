$(function () {
    var json;

    var rand = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var getRandFrom = function (arr) {
      return arr[rand(0, arr.length - 1)];
    };

    var getRandomMethod = function () {
      // pick module
      var module = getRandFrom(json.modules);
      // console.log(module.name);

      // pick class
      var cls = getRandFrom(module.classes);
      // console.log(cls);

      // pick method
      var method = getRandFrom(cls.methods);

      return {
        name: method.name,
        textRaw: method.textRaw,
        desc: method.desc
      };
    };

    var right = 0,
      wrong = 0;

    var answer;

    var showTally = function () {
        $('#right').html(right);
        $('#wrong').html(wrong);
    };

    var next = function () {
        if (json) {
            var err;
            var method;

            do {
              try {
                method = getRandomMethod();
                err = null;
              } catch (e) {
                err = e;
              }
            } while (err);

            answer = method.name;
            
            $('input[name="name"]').val('');
            $('#textRaw, #name').hide();
            $('#name').html(method.name);
            $('#textRaw').html(method.textRaw);
            $('#desc').html(method.desc);
            $('pre', '#desc').html('not shown');

            showTally();
        }
    };

    $.getJSON('http://nodejs.org/api/buffer.json', function (data) {
        json = data;
        next();
    });

    $('#show').on('click', function () {
      $('#textRaw, #name').show();
      return false;
    });

    $('form').on('submit', function () {

        var name = $('input[name="name"]').val();
        
        if (name === answer) {
            right ++;
            next();
        } else {
            wrong ++;
            $('#show').click();
            setTimeout(next, 2000);
        }

        return false;
    });
});