"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var forms_1 = require('@angular/forms');
var SchemedFormArray = (function (_super) {
    __extends(SchemedFormArray, _super);
    function SchemedFormArray(scheme, controls, validator, asyncValidator) {
        if (controls === void 0) { controls = []; }
        _super.call(this, controls, validator, asyncValidator);
        this.scheme = scheme;
    }
    SchemedFormArray.prototype.patchValue = function (value, opts) {
        if (value === void 0) { value = []; }
        this.adjustControls(value.length);
        _super.prototype.patchValue.call(this, value, opts);
    };
    SchemedFormArray.prototype.reset = function (value, opts) {
        if (value === void 0) { value = []; }
        this.adjustControls(value.length);
        _super.prototype.reset.call(this, value, opts);
    };
    SchemedFormArray.prototype.setValue = function (value, opts) {
        if (value === void 0) { value = []; }
        this.adjustControls(value.length);
        _super.prototype.setValue.call(this, value, opts);
    };
    SchemedFormArray.prototype.adjustControls = function (newLength) {
        var diff = newLength - this.length;
        if (diff > 0) {
            while (diff--) {
                this.push(this.scheme());
            }
        }
        else if (diff < 0) {
            while (diff++) {
                this.removeAt(diff);
            }
        }
    };
    return SchemedFormArray;
}(forms_1.FormArray));
exports.SchemedFormArray = SchemedFormArray;
