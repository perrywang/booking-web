// JavaScript Document
/*
	jQuery Form Validators v0.3.5
	Website: http://validator.codeplex.com/
	License: http://validator.codeplex.com/license
	Examples:
    <input type='text' validate="group" require="please enter a value" />
	<input type='text' validate="group" email="invalid email" />
    <input type='text' validate="group" regular="must be less than 6 chars long" validExpress=".{6,}" />
	<input type='text' validate="group" regular="must be less than 6 chars long" invalidExpress=".{,6}" />
    <input type='text' validate="group" compare="password mismatch" compareTo="button1" />
    <input type='text' validate="group" custom="must be less than 6 chars long" customFn="this.length < 6" />
    <input type='text' validate="group" invalid="username cannot be used" invalidVal="username" />
*/

var validate;

(function($) {

	validate = function(group) {
		//return false;
		try{
			resetLookupValues();
		}catch(e){}
		var marker = true;
		$("*[validate=" + group + "][type!='hidden']").each(function(i, elm) {
			if (check(elm)) {
				$(elm).highlight();
				if (marker){
					showAlertMsg($(elm).find(":input").andSelf());
					$(elm).find(":input").andSelf().focus();
					//$(elm).find(":input").andSelf().click();
				}
				marker = false;
			}
			else
				$(elm).unhighlight();
		});
		return marker;
	}

	function revalidate() {
		if (!check(this))
			$(this).unhighlight();
		else
		   $(this).highlight();
	}

	function check(elm) {
		var jelm = $(elm);
		try{
			if(jelm.css('display')=='none' || jelm.parent().css('display')=='none'  || jelm.parent().parent().css('display')=='none')
				return false;
		}catch(e){}
		
		if ((jelm.val() == "" || jelm.val() == null || jelm.val() == "null") )
			return jelm.attr("require") ? "require" : "";
	}

	function showAlert(){
		var ctrl = $(this);
		showAlertMsg(ctrl);
	}
	
	function showAlertMsg(ctrl) {
		
		var top = ctrl.offset().top + ctrl.height() + 4;
		var left = ctrl.offset().left + Math.max(ctrl.width() - 260, 0);
		ctrl.parents().each(function() {
			if ($(this).css("position") != "static" && (!$.browser.mozilla || $(this).css("display") != "table")) {
				var offset = $(this).offset();
				top -= offset.top;
				left -= offset.left;
				return false;
			}
		});
		ctrl.parent().children(".alertbox").remove();
		ctrl.parent().append("<div class='alertbox' style='top:" + top + "px; left:" + left + "px;'><div>" + ctrl.attr(check(ctrl[0])) + "</div></div>");
	}

	function hideAlert() {
		$(this).parent().children(".alertbox").remove();
	}

	$.fn.highlight = function() { this.addClass("highlight").focus(showAlert).blur(hideAlert).change(revalidate).keyup(revalidate); return this; }
	$.fn.unhighlight = function() { this.removeClass("highlight").unbind("focus", showAlert).unbind("blur", hideAlert).parent().children(".alertbox").remove(); return this; }

})(jQuery);

var validators = {
	"email": function() { return new RegExp("[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?", "m").test(this.value); }
};
