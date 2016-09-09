var map = LanguageMapProvider.getMap("he_en");
var languageConvertor = new LanguageConvertor("he_en", map);

$("input").keypress(fixLanguage);

function fixLanguage(event) {
	if (languageConvertor.isExist(event.key)) {
		event.preventDefault();
		var convertedKey = languageConvertor.tryConvert(event.key);
		$(this).val($(this).val() + convertedKey);
		console.log(convertedKey);
	}
}