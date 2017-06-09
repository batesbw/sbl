/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from './signup.component';
import * as import2 from '@angular/forms';
import * as import3 from './auth.service';
var styles_SignupComponent = [];
export var RenderType_SignupComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_SignupComponent,
    data: {}
});
export function View_SignupComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 63, 'div', [[
                'class',
                'col-md-8 col-md-offset-2'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 60, 'form', [[
                'novalidate',
                ''
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngSubmit'
            ],
            [
                null,
                'submit'
            ],
            [
                null,
                'reset'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('submit' === en)) {
                var pd_0 = (import0.ɵnov(v, 4).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (import0.ɵnov(v, 4).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (co.onSubmit() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(16384, null, 0, import2.ɵbf, [], null, null),
        import0.ɵdid(540672, null, 0, import2.FormGroupDirective, [
            [
                8,
                null
            ],
            [
                8,
                null
            ]
        ], { form: [
                0,
                'form'
            ]
        }, { ngSubmit: 'ngSubmit' }),
        import0.ɵprd(2048, null, import2.ControlContainer, null, [import2.FormGroupDirective]),
        import0.ɵdid(16384, null, 0, import2.NgControlStatusGroup, [import2.ControlContainer], null, null),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [[
                'for',
                'firstName'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['First Name'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'input', [
            [
                'class',
                'form-control'
            ],
            [
                'formControlName',
                'firstName'
            ],
            [
                'id',
                'firstName'
            ],
            [
                'type',
                'text'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (import0.ɵnov(v, 14)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 14).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 14)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 14)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(16384, null, 0, import2.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import2.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵprd(1024, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.DefaultValueAccessor]),
        import0.ɵdid(671744, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import2.NG_VALUE_ACCESSOR
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import0.ɵprd(2048, null, import2.NgControl, null, [import2.FormControlName]),
        import0.ɵdid(16384, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [[
                'for',
                'lastName'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Last Name'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'input', [
            [
                'class',
                'form-control'
            ],
            [
                'formControlName',
                'lastName'
            ],
            [
                'id',
                'lastName'
            ],
            [
                'type',
                'text'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (import0.ɵnov(v, 27)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 27).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 27)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 27)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(16384, null, 0, import2.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import2.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵprd(1024, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.DefaultValueAccessor]),
        import0.ɵdid(671744, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import2.NG_VALUE_ACCESSOR
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import0.ɵprd(2048, null, import2.NgControl, null, [import2.FormControlName]),
        import0.ɵdid(16384, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [[
                'for',
                'email'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Mail'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'input', [
            [
                'class',
                'form-control'
            ],
            [
                'formControlName',
                'email'
            ],
            [
                'id',
                'email'
            ],
            [
                'type',
                'email'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (import0.ɵnov(v, 40)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 40).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 40)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 40)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(16384, null, 0, import2.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import2.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵprd(1024, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.DefaultValueAccessor]),
        import0.ɵdid(671744, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import2.NG_VALUE_ACCESSOR
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import0.ɵprd(2048, null, import2.NgControl, null, [import2.FormControlName]),
        import0.ɵdid(16384, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [[
                'for',
                'password'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Password'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'input', [
            [
                'class',
                'form-control'
            ],
            [
                'formControlName',
                'password'
            ],
            [
                'id',
                'password'
            ],
            [
                'type',
                'password'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (import0.ɵnov(v, 53)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 53).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 53)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 53)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(16384, null, 0, import2.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import2.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵprd(1024, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.DefaultValueAccessor]),
        import0.ɵdid(671744, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import2.NG_VALUE_ACCESSOR
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import0.ɵprd(2048, null, import2.NgControl, null, [import2.FormControlName]),
        import0.ɵdid(16384, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [
            [
                'class',
                'btn btn-primary'
            ],
            [
                'type',
                'submit'
            ]
        ], [[
                8,
                'disabled',
                0
            ]
        ], null, null, null, null)),
        (l()(), import0.ɵted(null, ['Submit'])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_7 = co.myForm;
        ck(v, 4, 0, currVal_7);
        var currVal_15 = 'firstName';
        ck(v, 16, 0, currVal_15);
        var currVal_23 = 'lastName';
        ck(v, 29, 0, currVal_23);
        var currVal_31 = 'email';
        ck(v, 42, 0, currVal_31);
        var currVal_39 = 'password';
        ck(v, 55, 0, currVal_39);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = import0.ɵnov(v, 6).ngClassUntouched;
        var currVal_1 = import0.ɵnov(v, 6).ngClassTouched;
        var currVal_2 = import0.ɵnov(v, 6).ngClassPristine;
        var currVal_3 = import0.ɵnov(v, 6).ngClassDirty;
        var currVal_4 = import0.ɵnov(v, 6).ngClassValid;
        var currVal_5 = import0.ɵnov(v, 6).ngClassInvalid;
        var currVal_6 = import0.ɵnov(v, 6).ngClassPending;
        ck(v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = import0.ɵnov(v, 18).ngClassUntouched;
        var currVal_9 = import0.ɵnov(v, 18).ngClassTouched;
        var currVal_10 = import0.ɵnov(v, 18).ngClassPristine;
        var currVal_11 = import0.ɵnov(v, 18).ngClassDirty;
        var currVal_12 = import0.ɵnov(v, 18).ngClassValid;
        var currVal_13 = import0.ɵnov(v, 18).ngClassInvalid;
        var currVal_14 = import0.ɵnov(v, 18).ngClassPending;
        ck(v, 13, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        var currVal_16 = import0.ɵnov(v, 31).ngClassUntouched;
        var currVal_17 = import0.ɵnov(v, 31).ngClassTouched;
        var currVal_18 = import0.ɵnov(v, 31).ngClassPristine;
        var currVal_19 = import0.ɵnov(v, 31).ngClassDirty;
        var currVal_20 = import0.ɵnov(v, 31).ngClassValid;
        var currVal_21 = import0.ɵnov(v, 31).ngClassInvalid;
        var currVal_22 = import0.ɵnov(v, 31).ngClassPending;
        ck(v, 26, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22);
        var currVal_24 = import0.ɵnov(v, 44).ngClassUntouched;
        var currVal_25 = import0.ɵnov(v, 44).ngClassTouched;
        var currVal_26 = import0.ɵnov(v, 44).ngClassPristine;
        var currVal_27 = import0.ɵnov(v, 44).ngClassDirty;
        var currVal_28 = import0.ɵnov(v, 44).ngClassValid;
        var currVal_29 = import0.ɵnov(v, 44).ngClassInvalid;
        var currVal_30 = import0.ɵnov(v, 44).ngClassPending;
        ck(v, 39, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30);
        var currVal_32 = import0.ɵnov(v, 57).ngClassUntouched;
        var currVal_33 = import0.ɵnov(v, 57).ngClassTouched;
        var currVal_34 = import0.ɵnov(v, 57).ngClassPristine;
        var currVal_35 = import0.ɵnov(v, 57).ngClassDirty;
        var currVal_36 = import0.ɵnov(v, 57).ngClassValid;
        var currVal_37 = import0.ɵnov(v, 57).ngClassInvalid;
        var currVal_38 = import0.ɵnov(v, 57).ngClassPending;
        ck(v, 52, 0, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38);
        var currVal_40 = !co.myForm.valid;
        ck(v, 60, 0, currVal_40);
    });
}
function View_SignupComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'app-signup', [], null, null, null, View_SignupComponent_0, RenderType_SignupComponent)),
        import0.ɵdid(114688, null, 0, import1.SignupComponent, [import3.AuthService], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var SignupComponentNgFactory = import0.ɵccf('app-signup', import1.SignupComponent, View_SignupComponent_Host_0, {}, {}, []);
