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

    var getMeth = function () {
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

      return method;
    };

    var randSortArray = function (arr) {
      var newArr = [],
        num;

      while (arr.length) {
        num = rand(0, arr.length - 1);
        newArr.push(arr.splice(num, 1)[0]);
      }

      while (arr.length < newArr.length) {
        arr.splice(arr.length - 1, 0, newArr[arr.length]);
      }
    };

    var next = function () {
        if (json) {
              
            var m1 = getMeth();
            var methods = [];

            answer = m1.name;

            var i = 0;
            for (i = 0; i < 4; i++) {
              methods.push(getMeth());
            }

            randSortArray(methods);

            var hints = '';
            methods.forEach(function (method) {
              hints += method.name;
            });
            $('#hints').html(hints);


            

            $('input[name="name"]').val('');
            $('#textRaw, #name').hide();
            $('#name').html(m1.name);
            $('#textRaw').html(m1.textRaw);
            $('#desc').html(m1.desc);
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