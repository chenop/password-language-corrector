var languageConvertor = createLanguageConvertor();

function createLanguageConvertor() {
	var map = LanguageMapProvider.getMap("he_en");
	var languageConvertor = new LanguageConvertor("he_en", map);

	var inputs = $("input:password");
	inputs.keypress(fixLanguage);

	inputs.qtip({ // Grab some elements to apply the tooltip to
		content: '<div><img style="vertical-align:middle" src="https://cdn2.iconfinder.com/data/icons/blue-rounded-set/154/password-pin-code-pass-access-32.png"><span style="padding-left: 10px">Coverting to english!</span></div>',
		show: false,
		position: {
			my: 'top center',  // Position my top left...
			at: 'bottom center', // at the bottom right of...
			target: inputs // my target
		},
		style: {
			classes: 'my-tooltip',
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