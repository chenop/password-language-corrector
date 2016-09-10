/**
 * Created by Chen on 09/09/2016.
 */
var LanguageMapProvider = (function () {
    function LanguageMapProvider() {
    }
    LanguageMapProvider.getMap = function (language) {
        if (!LanguageMapProvider._maps.hasOwnProperty(language)) {
            // TODO get langugae by http request (not sure it is really needed)
            throw "no such language ${language}";
        }
        return LanguageMapProvider._maps[language];
    };
    // TODO find a solution for using a global variable
    LanguageMapProvider._maps = maps;
    return LanguageMapProvider;
})();
;
//# sourceMappingURL=LanguageMapProvider.js.map