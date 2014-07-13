/* jshint node: true */

var f1 = function (fn) {
  // step 4
  // step 6
  fn();
};

var f2 = function iHaveAName () {
  // step 3
  f1(function soDoI () {
    // step 5
    f1(function () {
      // step 7
      console.trace('a label');
    });
  });
};

var f3 = function () {
  // step 2
  f2();
};

var f4 = function () {
  // step 1
  f3();
};

f4();