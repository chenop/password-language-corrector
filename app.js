var map = LanguageMapProvider.getMap("he_en");
var languageConvertor = new LanguageConvertor("he_en", map);

$("input").keypress(fixLanguage);

function fixLanguage(event) {
	if (languageConvertor.isExist(event.key)) {
		event.preventDefault();
		var convertedKey = languageConvertor.tryConvert(event.key);
		$(this).val($(this).val() + convertedKey);
		$(this).qtip({ // Grab some elements to apply the tooltip to
			content:  'Coverting to english!',
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
		//console.log(convertedKey);
	}
	$(this).qtip("hide");
}