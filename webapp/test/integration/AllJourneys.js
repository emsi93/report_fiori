/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"report/report/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"report/report/test/integration/pages/Worklist",
	"report/report/test/integration/pages/Object",
	"report/report/test/integration/pages/NotFound",
	"report/report/test/integration/pages/Browser",
	"report/report/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "report.report.view."
	});

	sap.ui.require([
		"report/report/test/integration/WorklistJourney",
		"report/report/test/integration/ObjectJourney",
		"report/report/test/integration/NavigationJourney",
		"report/report/test/integration/NotFoundJourney",
		"report/report/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});