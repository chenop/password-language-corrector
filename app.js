var languageConvertor = createLanguageConvertor();

function createLanguageConvertor() {
	var map = LanguageMapProvider.getMap("he_en");
	var languageConvertor = new LanguageConvertor("he_en", map);

	var inputs = $("input:password");
	inputs.keypress(fixLanguage);

	inputs.qtip({ // Grab some elements to apply the tooltip to
		content: '<div><img style="vertical-align:middle" src="https://www.iconfinder.com/icons/650961/1071962/128/raster?token=1474780419-ZhcTAiu1Ia3eD5F6Zx3UfbYvybhyBkGc-L%2BgHdKLA84jqc/mYCQ0cNUV48Z4%3D"><span style="padding-left: 10px">Coverting to english!</span></div>',
		show: false,
		position: {
			my: 'top center',  // Position my top left...
			at: 'bottom center', // at the bottom right of...
			target: inputs // my target
		},
		style: {
			classes: 'password-language-tooltip',
		}
	});
	return languageConvertor;
}

function showTooltip() {
	$(this).qtip("show");
}
function hideTooltip() {
	$(this).qtip("hide");
}
function appendKey(convertedKey) {
	$(this).val($(this).val() + convertedKey);
}
function fixLanguage(event) {
	if (languageConvertor.isExist(event.key)) {
		event.preventDefault();
		var convertedKey = languageConvertor.tryConvert(event.key);
		appendKey.call(this, convertedKey);
		showTooltip.call(this);
	}
	else
		hideTooltip.call(this);
}