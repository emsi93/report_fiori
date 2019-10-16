sap.ui.define([
		"report/report/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("report.report.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);