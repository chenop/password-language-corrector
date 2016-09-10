var map = LanguageMapProvider.getMap("he_en");
var languageConvertor = new LanguageConvertor("he_en", map);

$("input:password").keypress(fixLanguage);

function showTooltip() {
	$(this).qtip({ // Grab some elements to apply the tooltip to
		content: 'Coverting to english!',
		show: true,
		position: {
			my: 'top center',  // Position my top left...
			at: 'bottom center', // at the bottom right of...
			target: $(this) // my target
		},
		style: {
			classes: 'qtip-blue',
		}
	})
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
	hideTooltip.call(this);
}