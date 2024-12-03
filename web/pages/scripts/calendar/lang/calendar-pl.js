// ** I18N
// Calendar PL language
// Author: Artur Filipiak, <imagen@poczta.fm>
// January, 2004
// Encoding: UTF-8
Calendar._DN = new Array
("Niedziela", "PoniedziaЕ‚ek", "Wtorek", "Ељroda", "Czwartek", "PiД…tek", "Sobota", "Niedziela");

Calendar._SDN = new Array
("N", "Pn", "Wt", "Ељr", "Cz", "Pt", "So", "N");

Calendar._MN = new Array
("StyczeЕ„", "Luty", "Marzec", "KwiecieЕ„", "Maj", "Czerwiec", "Lipiec", "SierpieЕ„", "WrzesieЕ„", "PaЕєdziernik", "Listopad", "GrudzieЕ„");

Calendar._SMN = new Array
("Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "PaЕє", "Lis", "Gru");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "O kalendarzu";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"For latest version visit: http://www.dynarch.com/projects/calendar/\n" +
"Distributed under GNU LGPL.  See http://gnu.org/licenses/lgpl.html for details." +
"\n\n" +
"WybГіr daty:\n" +
"- aby wybraД‡ rok uЕјyj przyciskГіw \xab, \xbb\n" +
"- aby wybraД‡ miesiД…c uЕјyj przyciskГіw " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + "\n" +
"- aby przyspieszyД‡ wybГіr przytrzymaj wciЕ›niД™ty przycisk myszy nad ww. przyciskami.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"WybГіr czasu:\n" +
"- aby zwiД™kszyД‡ wartoЕ›Д‡ kliknij na dowolnym elemencie selekcji czasu\n" +
"- aby zmniejszyД‡ wartoЕ›Д‡ uЕјyj dodatkowo klawisza Shift\n" +
"- moЕјesz rГіwnieЕј poruszaД‡ myszkД™ w lewo i prawo wraz z wciЕ›niД™tym lewym klawiszem.";

Calendar._TT["PREV_YEAR"] = "Poprz. rok (przytrzymaj dla menu)";
Calendar._TT["PREV_MONTH"] = "Poprz. miesiД…c (przytrzymaj dla menu)";
Calendar._TT["GO_TODAY"] = "PokaЕј dziЕ›";
Calendar._TT["NEXT_MONTH"] = "Nast. miesiД…c (przytrzymaj dla menu)";
Calendar._TT["NEXT_YEAR"] = "Nast. rok (przytrzymaj dla menu)";
Calendar._TT["SEL_DATE"] = "Wybierz datД™";
Calendar._TT["DRAG_TO_MOVE"] = "PrzesuЕ„ okienko";
Calendar._TT["PART_TODAY"] = " (dziЕ›)";
Calendar._TT["MON_FIRST"] = "PokaЕј PoniedziaЕ‚ek jako pierwszy";
Calendar._TT["SUN_FIRST"] = "PokaЕј NiedzielД™ jako pierwszД…";
Calendar._TT["CLOSE"] = "Zamknij";
Calendar._TT["TODAY"] = "DziЕ›";
Calendar._TT["TIME_PART"] = "(Shift-)klik | drag, aby zmieniД‡ wartoЕ›Д‡";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%Y.%m.%d";
Calendar._TT["TT_DATE_FORMAT"] = "%a, %b %e";

Calendar._TT["WK"] = "wk";