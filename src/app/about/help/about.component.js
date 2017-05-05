"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var accordion_1 = require('ng2-bootstrap/accordion');
function getAccordionConfig() {
    return Object.assign(new accordion_1.AccordionConfig(), { closeOthers: false });
}
exports.getAccordionConfig = getAccordionConfig;
var AboutComponent = (function () {
    function AboutComponent() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            templateUrl: 'about.component.html',
            styleUrls: ['about.component.css'],
            providers: [{ provide: accordion_1.AccordionConfig, useFactory: getAccordionConfig }]
        })
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
