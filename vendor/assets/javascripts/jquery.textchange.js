/*!
 * jQuery TextChange Plugin
 * http://www.zurb.com/playground/jquery-text-change-custom-event
 *
 * Copyright 2010, ZURB
 * Released under the MIT License
 */
(function ($) {

	$.event.special.textchange = {

    add: function (handleObj) {
      var elem = $(this);
      if (handleObj.selector != undefined) {
        elem = elem.find(handleObj.selector);
      }
		  elem.data('lastValue', elem[0].contentEditable === 'true' ? elem.html() : elem.val());
			elem.bind('keyup.textchange', $.event.special.textchange.handler);
			elem.bind('cut.textchange paste.textchange input.textchange', $.event.special.textchange.delayedHandler);
    },

    remove: function (handleObj) {
      var elem = $(this);
      if (handleObj.selector != undefined) {
        elem = elem.find(handleObj.selector);
      }
			elem.unbind('.textchange');
    },

		handler: function (event) {
			$.event.special.textchange.triggerIfChanged($(this));
		},

		delayedHandler: function (event) {
			var element = $(this);
			setTimeout(function () {
				$.event.special.textchange.triggerIfChanged(element);
			}, 25);
		},

		triggerIfChanged: function (element) {
		  var current = element[0].contentEditable === 'true' ? element.html() : element.val();
			if (current !== element.data('lastValue')) {
				element.trigger('textchange',  [element.data('lastValue')]);
				element.data('lastValue', current);
			}
		}
	};

	$.event.special.hastext = {

    add: function (handleObj) {
      var elem = $(this);
      if (handleObj.selector != undefined) {
        elem = elem.find(handleObj.selector);
      }
			elem.bind('textchange', $.event.special.hastext.handler);
		},

    remove: function (handleObj) {
      var elem = $(this);
      if (handleObj.selector != undefined) {
        elem = elem.find(handleObj.selector);
      }
			elem.unbind('textchange', $.event.special.hastext.handler);
		},

		handler: function (event, lastValue) {
			if ((lastValue === '') && lastValue !== $(this).val()) {
				$(this).trigger('hastext');
			}
		}
	};

	$.event.special.notext = {

    add: function (handleObj) {
      var elem = $(this);
      if (handleObj.selector != undefined) {
        elem = elem.find(handleObj.selector);
      }
			elem.bind('textchange', $.event.special.notext.handler);
		},

    remove: function (handleObj) {
      var elem = $(this);
      if (handleObj.selector != undefined) {
        elem = elem.find(handleObj.selector);
      }
			elem.unbind('textchange', $.event.special.notext.handler);
		},

		handler: function (event, lastValue) {
			if ($(this).val() === '' && $(this).val() !== lastValue) {
				$(this).trigger('notext');
			}
		}
	};

})(jQuery);
