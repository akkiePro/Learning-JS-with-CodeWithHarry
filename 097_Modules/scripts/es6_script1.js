/**
 * advantage of ES6 modules, we can use default function.
 * ex. akki() here.
 */
import akki, {hello, advanceHello} from "../modules/ES6/es6_module1.js";    
// to use this set "type": "module" in package.json
hello();
advanceHello("Akash");
advanceHello("Shruti");
advanceHello("Disha");
akki();
