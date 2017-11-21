import { Component, NgModule } from '@angular/core';

var MyLibComponent = function MyLibComponent() {
    babelHelpers.classCallCheck(this, MyLibComponent);
};

MyLibComponent.decorators = [{ type: Component, args: [{
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

MyLibModule.decorators = [{ type: NgModule, args: [{
        imports: [],
        declarations: [MyLibComponent],
        exports: [MyLibComponent]
    }] }];
MyLibModule.ctorParameters = function () {
    return [];
};

export { MyLibModule, MyLibComponent };

//# sourceMappingURL=my-lib.es5.js.map