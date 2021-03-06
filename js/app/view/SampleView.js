(function(){
	"use strict";

	//---------------------------------------------------------------
	//------------------ Global Vars and Libs -----------------------
	//---------------------------------------------------------------

	var Events = NS.import('lib.Events');
	var Delegate = NS.import('lib.Delegate');
	var CONST = NS.import('app.model.CONST');

	//---------------------------------------------------------------
	//---------------------- Constructor ----------------------------
	//---------------------------------------------------------------


	/**
	 * Sample view class
	 * @param {DOM Object id} ui
	 * @public
	 */
	var SampleView = function ( ui ) {
		this.ui = ui;
		this.el = document.getElementById(ui);

		// Event Subscriptions
		Events.subscribe (CONST.DATA_EVENT_NAME_1, Delegate(this._onSampleDataEvent, this));
	};


	//---------------------------------------------------------------
	//------------------------ Methods ------------------------------
	//---------------------------------------------------------------


	var p = SampleView.prototype;


	//---------------------------------------------------------------
	//------------------------ Internal -----------------------------
	//---------------------------------------------------------------

	/**
	 * Handler when sample data event
	 * @param {String} data [Sample data from model]
	 * @private
	 */
	p.onSampleDataEvent = function ( data ) {
		console.log ( 'SampleView::onSampleDataEvent -', data );
	};

	var namespace = new NS ( 'app.view' );
	namespace.SampleView = SampleView;

})();



