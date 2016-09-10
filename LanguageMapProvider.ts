/**
 * Created by Chen on 09/09/2016.
 */

declare var maps: any;

class LanguageMapProvider {
    // TODO find a solution for using a global variable
    static _maps:any = maps;

    static getMap(language: string) {
        if (!LanguageMapProvider._maps.hasOwnProperty(language)) {
            // TODO get langugae by http request (not sure it is really needed)
            throw "no such language ${language}";
        }
        return LanguageMapProvider._maps[language];
    }
};
