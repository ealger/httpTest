"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
//Applying the route configuration when bootstrapping Angular2 app
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map