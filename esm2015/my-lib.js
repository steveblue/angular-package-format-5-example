import { Component, NgModule } from '@angular/core';

class MyLibComponent {
    constructor() { }
}
MyLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmp-my-lib',
                template: "",
                styles: [""]
            },] },
];
MyLibComponent.ctorParameters = () => [];

class MyLibModule {
}
MyLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [MyLibComponent],
                exports: [MyLibComponent]
            },] },
];
MyLibModule.ctorParameters = () => [];

export { MyLibModule, MyLibComponent };
