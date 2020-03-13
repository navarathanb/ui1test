"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var products_service_1 = require("./products.service");
var AppComponent = (function () {
    function AppComponent(prosService) {
        this.prosService = prosService;
        this.name = 'James';
        this.mobile = 90329832;
        this.data = "Host crystal-clear meetings with up to 250 attendees.Take your meetings on the go with industry-leading mobile apps. Calendar plugins mean you can schedule & join a meeting in seconds. Productivity…boosted with unlimited cloud recording & meeting transcription.";
        this.emps = [{ 'id': 100, 'name': 'james', 'email': 'james@gmail.com', 'mobile': 2343242, 'img': 'app/img/1.jpg' }, { 'id': 101, 'name': 'vimal', 'email': 'vimal@gmail.com', 'mobile': 34253232, 'img': 'app/img/2.jpg' }, { 'id': 102, 'name': 'suresh', 'email': 'suresh@gmail.com', 'mobile': 3243243242, 'img': 'app/img/3.jpg' }, { 'id': 103, 'name': 'kumar', 'email': 'kumar@gmail.com', 'mobile': 243242, 'img': 'app/img/4.jpg' }, { 'id': 104, 'name': 'patrick', 'email': 'patrick@gmail.com', 'mobile': 23432423, 'img': 'app/img/5.jpg' }];
        this.result = true;
        this.image = "app/img/1.jpg";
        this.addCart = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prosService.getProductsData().subscribe(function (response) { return _this.products = response; });
        return this.products;
    };
    AppComponent.prototype.cart = function (pname, cost, img, id) {
        this.addCart.push({ "pname": pname, "cost": cost, "img": img, "id": id });
    };
    AppComponent.prototype.delete = function (pid) {
        for (var i = 0; i < this.addCart.length; i++) {
            if (this.addCart[i].id === pid) {
                this.addCart.splice(i, 1);
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        // template: `<h1>Hello {{name}}</h1>`,
        templateUrl: "app/app.component.html",
        styles: ['h2{color: red; font-size: 40px;}'],
        styleUrls: ['./app.component.css'],
        providers: [products_service_1.productService]
    }),
    __metadata("design:paramtypes", [products_service_1.productService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map