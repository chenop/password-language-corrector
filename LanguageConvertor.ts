class LanguageConvertor {
    private _fromLanguage:string;
    private _map: any;

    constructor(fromLanguage:string, map: any) {
		console.log("instantiate LanguageConvertor");
        this._fromLanguage = fromLanguage;

        this._map = map;
    }

    public tryConvert(c: string) {
        if (this._map.hasOwnProperty(c))
            return this._map[c];
        return c;
    }

    public isExist(c: string) {
        return this._map.hasOwnProperty(c); // comment
    }
}
