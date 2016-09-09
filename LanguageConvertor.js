var LanguageConvertor = (function () {
    function LanguageConvertor(fromLanguage, map) {
        console.log("instantiate LanguageConvertor");
        this._fromLanguage = fromLanguage;
        this._map = map;
    }
    LanguageConvertor.prototype.tryConvert = function (c) {
        if (this._map.hasOwnProperty(c))
            return this._map[c];
        return c;
    };
    LanguageConvertor.prototype.isExist = function (c) {
        return this._map.hasOwnProperty(c);
    };
    return LanguageConvertor;
})();
//# sourceMappingURL=LanguageConvertor.js.map