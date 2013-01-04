/*!
* jQuery UI Modals - modal dialogs for Alert, Confirm and Prompt
* http://gusc.lv
*
* Copyright (C) 2012 Gusts 'gusC' Kaksis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
* documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
* the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and 
* to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
* THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
* TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
* 
*
* Depends:
*  jquery.ui.dialog
*/
(function( $, undefined ) {
	
	if ($.ui == undefined){
		alert('jQuery UI with dialog widget is required to run jQuery UI Modals plug-in');
	} else {	
		$.alert = (function(){
			var _template = '<div class="ui-alert"><p></p></div>',
					_defaults = {
						title: 'Alert',
						body: '',
						ok: {
							text: 'OK',
							callback: null
						}
					};
			
			var _exec = function(options){
				var opt = $.extend({}, _defaults, options || {});
				var $dialog = $(_template);
				$dialog.find('p').append(opt['body']);
				$dialog.appendTo('body');
				$dialog.dialog({
					modal: true,
					minWidth: 300,
					minHeight: 150,
					title: opt['title'],
					resizable: false,
					buttons: [ {
						text: opt['ok']['text'], 
						click: _ok_cb
					} ],
					close: _close,
					open: _open
				});
				$dialog.data('options', opt);
			},
			_open = function(event, ui){
				$(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
			},
			_close = function(event, ui){
				$(this).removeData('options').dialog('destroy').remove();
			},
			_ok_cb = function(){
				var $dialog = $(this);
				var opt = $dialog.data('options');
				if (opt['ok']['callback'] != null){
					var cb = opt['ok']['callback'];
					cb();
				}
				$dialog.dialog("close");
			};
			
			return _exec;
		})();
		
		$.confirm = (function(){
			var _template = '<div class="ui-confirm"><p></p></div>',
					_defaults = {
						title: 'Confirm',
						body: '',
						ok: {
							text: 'OK',
							callback: null
						},
						cancel: {
							text: 'Cancel',
							callback: null
						}
					};
			
			var _exec = function(options){
				var opt = $.extend({}, _defaults, options || {});
				var $dialog = $(_template);
				$dialog.find('p').append(opt['body']);
				$dialog.appendTo('body');
				$dialog.dialog({
					modal: true,
					minWidth: 300,
					minHeight: 150,
					title: opt['title'],
					resizable: false,
					buttons: [ {
						text: opt['ok']['text'], 
						click: _ok_cb
					}, {
						text: opt['cancel']['text'], 
						click: _cancel_cb
					} ],
					close: _close,
					open: _open
				});
				$dialog.data('options', opt);
			},
			_open = function(event, ui){
				$(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
			},
			_close = function(event, ui){
				$(this).removeData('options').dialog('destroy').remove();
			},
			_cancel_cb = function(){
				var $dialog = $(this);
				var opt = $dialog.data('options');
				if (opt['cancel']['callback'] != null){
					var cb = opt['cancel']['callback'];
					cb();
				}
				$dialog.dialog("close");
			},
			_ok_cb = function(){
				var $dialog = $(this);
				var opt = $dialog.data('options');
				if (opt['ok']['callback'] != null){
					var cb = opt['ok']['callback'];
					cb();
				}
				$dialog.dialog("close");
			};
			
			return _exec;
		})();
		
		$.prompt = (function(){
			var _template = '<div class="ui-prompt"><p></p><div><input type="text" class="ui-input"></div></div>',
					_defaults = {
						title: 'Prompt',
						body: '',
						ok: {
							text: 'OK',
							callback: null
						},
						cancel: {
							text: 'Cancel',
							callback: null
						}
					};
			
			var _exec = function(options){
				var opt = $.extend({}, _defaults, options || {});
				var $dialog = $(_template);
				$dialog.find('p').append(opt['body']);
				$dialog.appendTo('body');
				$dialog.dialog({
					modal: true,
					minWidth: 300,
					minHeight: 150,
					title: opt['title'],
					resizable: false,
					buttons: [ {
						text: opt['ok']['text'], 
						click: _ok_cb
					}, {
						text: opt['cancel']['text'], 
						click: _cancel_cb
					} ],
					close: _close,
					open: _open
				});
				$dialog.data('options', opt);
			},
			_open = function(event, ui){
				$(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
			},
			_close = function(event, ui){
				$(this).removeData('options').dialog('destroy').remove();
			},
			_cancel_cb = function(){
				var $dialog = $(this);
				var opt = $dialog.data('options');
				if (opt['cancel']['callback'] != null){
					var cb = opt['cancel']['callback'];
					cb();
				}
				$dialog.dialog("close");
			},
			_ok_cb = function(){
				var $dialog = $(this);
				var val = $dialog.find('input').val();
				var opt = $dialog.data('options');
				if (opt['ok']['callback'] != null){
					var cb = opt['ok']['callback'];
					cb(val);
				}
				$dialog.dialog("close");
			};
			
			return _exec;
		})();
	}
	
}( jQuery ) );