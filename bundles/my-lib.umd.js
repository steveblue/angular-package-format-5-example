'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyLibComponent = exports.MyLibModule = undefined;

var _core = require('@angular/core');

var MyLibComponent = function MyLibComponent() {
    babelHelpers.classCallCheck(this, MyLibComponent);
};

MyLibComponent.decorators = [{ type: _core.Component, args: [{
        selector: 'cmp-my-lib',
        template: "",
        styles: [""]
    }] }];
MyLibComponent.ctorParameters = function () {
    return [];
};

var MyLibModule = function MyLibModule() {
    babelHelpers.classCallCheck(this, MyLibModule);
};

MyLibModule.decorators = [{ type: _core.NgModule, args: [{
        imports: [],
        declarations: [MyLibComponent],
        exports: [MyLibComponent]
    }] }];
MyLibModule.ctorParameters = function () {
    return [];
};

exports.MyLibModule = MyLibModule;
exports.MyLibComponent = MyLibComponent;

//# sourceMappingURL=my-lib.umd.js.map