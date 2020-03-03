"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./hello");
var App = /** @class */ (function () {
    function App() {
    }
    /** Entry point of our app */
    App.start = function () {
        console.log(hello_1.hello('world ' + x));
    };
    return App;
}());
var x = 12;
App.start();
//# sourceMappingURL=app.js.map