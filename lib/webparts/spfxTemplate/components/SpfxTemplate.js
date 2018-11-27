"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require('../../../../node_modules/bootstrap/dist/css/bootstrap.css');
var SpfxTemplate = (function (_super) {
    __extends(SpfxTemplate, _super);
    function SpfxTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxTemplate.prototype.render = function () {
        var cssUrl = "";
        return (React.createElement("div", { className: "alert alert-primary", role: "alert" }, "A simple primary alert\u2014check it out!"));
    };
    return SpfxTemplate;
}(React.Component));
exports.default = SpfxTemplate;

//# sourceMappingURL=SpfxTemplate.js.map
