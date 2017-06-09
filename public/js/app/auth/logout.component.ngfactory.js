/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from './logout.component';
import * as import2 from './auth.service';
import * as import3 from '@angular/router';
var styles_LogoutComponent = [];
export var RenderType_LogoutComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_LogoutComponent,
    data: {}
});
export function View_LogoutComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'col-md-8 col-md-offset-2'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [[
                'class',
                'btn btn-danger'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onLogout() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Logout'])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n    ']))
    ], null, null);
}
function View_LogoutComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'app-logout', [], null, null, null, View_LogoutComponent_0, RenderType_LogoutComponent)),
        import0.ɵdid(49152, null, 0, import1.LogoutComponent, [
            import2.AuthService,
            import3.Router
        ], null, null)
    ], null, null);
}
export var LogoutComponentNgFactory = import0.ɵccf('app-logout', import1.LogoutComponent, View_LogoutComponent_Host_0, {}, {}, []);
