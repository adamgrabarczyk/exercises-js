"use strict";

/**
 * Created by adam on 04.11.17.
 */

function sumNumbers() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;


  return x + y;
}

alert(sumNumbers());

var arr = [1, 2, 3, 4];

alert(arr.includes(1));
