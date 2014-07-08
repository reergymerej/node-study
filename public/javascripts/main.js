$(function () {
    console.log('yo');

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


    $.getJSON('http://nodejs.org/api/buffer.json', function (data) {
        json = data;
    });

    $('button').on('click', function () {
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
            
            $('#name').html(method.name);
            $('#textRaw').html(method.textRaw);
            $('#desc').html(method.desc);
        }
    });
});