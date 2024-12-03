п»ї// ** I18N

// Calendar FI language (Finnish, Suomi)
// Author: Jarno KГ¤yhkГ¶, <gambler@phnet.fi>
// Encoding: UTF-8
// Distributed under the same terms as the calendar itself.

// full day names
Calendar._DN = new Array
("Sunnuntai",
 "Maanantai",
 "Tiistai",
 "Keskiviikko",
 "Torstai",
 "Perjantai",
 "Lauantai",
 "Sunnuntai");

// short day names
Calendar._SDN = new Array
("Su",
 "Ma",
 "Ti",
 "Ke",
 "To",
 "Pe",
 "La",
 "Su");

// full month names
Calendar._MN = new Array
("Tammikuu",
 "Helmikuu",
 "Maaliskuu",
 "Huhtikuu",
 "Toukokuu",
 "KesГ¤kuu",
 "HeinГ¤kuu",
 "Elokuu",
 "Syyskuu",
 "Lokakuu",
 "Marraskuu",
 "Joulukuu");

// short month names
Calendar._SMN = new Array
("Tam",
 "Hel",
 "Maa",
 "Huh",
 "Tou",
 "Kes",
 "Hei",
 "Elo",
 "Syy",
 "Lok",
 "Mar",
 "Jou");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "Tietoja kalenterista";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"Uusin versio osoitteessa: http://www.dynarch.com/projects/calendar/\n" +
"Julkaistu GNU LGPL lisenssin alaisuudessa. LisГ¤tietoja osoitteessa http://gnu.org/licenses/lgpl.html" +
"\n\n" +
"PГ¤ivГ¤mГ¤Г¤rГ¤ valinta:\n" +
"- KГ¤ytГ¤ \xab, \xbb painikkeita valitaksesi vuosi\n" +
"- KГ¤ytГ¤ " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " painikkeita valitaksesi kuukausi\n" +
"- PitГ¤mГ¤llГ¤ hiiren painiketta minkГ¤ tahansa yllГ¤ olevan painikkeen kohdalla, saat nГ¤kyviin valikon nopeampaan siirtymiseen.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"Ajan valinta:\n" +
"- Klikkaa kellonajan numeroita lisГ¤tГ¤ksesi aikaa\n" +
"- tai pitГ¤mГ¤llГ¤ Shift-nГ¤ppГ¤intГ¤ pohjassa saat aikaa taaksepГ¤in\n" +
"- tai klikkaa ja pidГ¤ hiiren painike pohjassa sekГ¤ liikuta hiirtГ¤ muuttaaksesi aikaa nopeasti eteen- ja taaksepГ¤in.";

Calendar._TT["PREV_YEAR"] = "Edell. vuosi (paina hetki, nГ¤et valikon)";
Calendar._TT["PREV_MONTH"] = "Edell. kuukausi (paina hetki, nГ¤et valikon)";
Calendar._TT["GO_TODAY"] = "Siirry tГ¤hГ¤n pГ¤ivГ¤Г¤n";
Calendar._TT["NEXT_MONTH"] = "Seur. kuukausi (paina hetki, nГ¤et valikon)";
Calendar._TT["NEXT_YEAR"] = "Seur. vuosi (paina hetki, nГ¤et valikon)";
Calendar._TT["SEL_DATE"] = "Valitse pГ¤ivГ¤mГ¤Г¤rГ¤";
Calendar._TT["DRAG_TO_MOVE"] = "SiirrГ¤ kalenterin paikkaa";
Calendar._TT["PART_TODAY"] = " (tГ¤nГ¤Г¤n)";
Calendar._TT["MON_FIRST"] = "NГ¤ytГ¤ maanantai ensimmГ¤isenГ¤";
Calendar._TT["SUN_FIRST"] = "NГ¤ytГ¤ sunnuntai ensimmГ¤isenГ¤";
Calendar._TT["CLOSE"] = "Sulje";
Calendar._TT["TODAY"] = "TГ¤nГ¤Г¤n";
Calendar._TT["TIME_PART"] = "(Shift-) Klikkaa tai liikuta muuttaaksesi aikaa";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%d.%m.%Y";
Calendar._TT["TT_DATE_FORMAT"] = "%d.%m.%Y";

Calendar._TT["WK"] = "Vko";
