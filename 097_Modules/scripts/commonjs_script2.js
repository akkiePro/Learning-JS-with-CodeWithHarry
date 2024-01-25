// 1. simple way
/* const hello = require("./module2.js");
hello.hello();
hello.advanceHello("Akash");
hello.advanceHello("Shruti");
hello.advanceHello("Disha"); */

// 2. using destructuring
const {hello, advanceHello} = require("../modules/commonjs/commonjs_module2.js");
hello();
advanceHello("Akash");
advanceHello("Shruti");
advanceHello("Disha");
