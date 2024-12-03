// ** I18N

// Calendar SK language
// Author: Peter Valach (pvalach@gmx.net)
// Encoding: utf-8
// Last update: 2003/10/29
// Distributed under the same terms as the calendar itself.

// full day names
Calendar._DN = new Array
("NedeГ„Дѕa",
 "Pondelok",
 "Utorok",
 "Streda",
 "Д№В tvrtok",
 "Piatok",
 "Sobota",
 "NedeГ„Дѕa");

// short day names
Calendar._SDN = new Array
("Ned",
 "Pon",
 "Uto",
 "Str",
 "Д№В tv",
 "Pia",
 "Sob",
 "Ned");

// full month names
Calendar._MN = new Array
("JanuД‚Л‡r",
 "FebruД‚Л‡r",
 "Marec",
 "AprД‚В­l",
 "MД‚Л‡j",
 "JД‚Еџn",
 "JД‚Еџl",
 "August",
 "September",
 "OktД‚Е‚ber",
 "November",
 "December");

// short month names
Calendar._SMN = new Array
("Jan",
 "Feb",
 "Mar",
 "Apr",
 "MД‚Л‡j",
 "JД‚Еџn",
 "JД‚Еџl",
 "Aug",
 "Sep",
 "Okt",
 "Nov",
 "Dec");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "O kalendД‚Л‡ri";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" +
"PoslednД‚Еџ verziu nД‚Л‡jdete na: http://www.dynarch.com/projects/calendar/\n" +
"DistribuovanД‚В© pod GNU LGPL.  ViГ„Е№ http://gnu.org/licenses/lgpl.html pre detaily." +
"\n\n" +
"VД‚Лќber dД‚Л‡tumu:\n" +
"- PouД№Дѕite tlaГ„Е¤idlД‚Л‡ \xab, \xbb pre vД‚Лќber roku\n" +
"- PouД№Дѕite tlaГ„Е¤idlД‚Л‡ " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " pre vД‚Лќber mesiaca\n" +
"- Ak ktorД‚В©koГ„Дѕvek z tД‚Лќchto tlaГ„Е¤idiel podrД№ДѕД‚В­te dlhД№Л‡ie, zobrazД‚В­ sa rД‚Лќchly vД‚Лќber.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"VД‚Лќber Г„Е¤asu:\n" +
"- Kliknutie na niektorД‚Еџ poloД№Дѕku Г„Е¤asu ju zvД‚ЛќД№Л‡i\n" +
"- Shift-klik ju znД‚В­Д№Дѕi\n" +
"- Ak podrД№ДѕД‚В­te tlaГ„Е¤Д‚В­tko stlaГ„Е¤enД‚В©, posД‚ЕџvanД‚В­m menД‚В­te hodnotu.";

Calendar._TT["PREV_YEAR"] = "PredoД№Л‡lД‚Лќ rok (podrД№Дѕte pre menu)";
Calendar._TT["PREV_MONTH"] = "PredoД№Л‡lД‚Лќ mesiac (podrД№Дѕte pre menu)";
Calendar._TT["GO_TODAY"] = "PrejsД№Д„ na dneД№Л‡ok";
Calendar._TT["NEXT_MONTH"] = "Nasl. mesiac (podrД№Дѕte pre menu)";
Calendar._TT["NEXT_YEAR"] = "Nasl. rok (podrД№Дѕte pre menu)";
Calendar._TT["SEL_DATE"] = "ZvoГ„Дѕte dД‚Л‡tum";
Calendar._TT["DRAG_TO_MOVE"] = "PodrД№ДѕanД‚В­m tlaГ„Е¤Д‚В­tka zmenД‚В­te polohu";
Calendar._TT["PART_TODAY"] = " (dnes)";
Calendar._TT["MON_FIRST"] = "ZobraziД№Д„ pondelok ako prvД‚Лќ";
Calendar._TT["SUN_FIRST"] = "ZobraziД№Д„ nedeГ„Дѕu ako prvД‚Еџ";
Calendar._TT["CLOSE"] = "ZavrieД№Д„";
Calendar._TT["TODAY"] = "Dnes";
Calendar._TT["TIME_PART"] = "(Shift-)klik/Д№Д„ahanie zmenД‚В­ hodnotu";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "$d. %m. %Y";
Calendar._TT["TT_DATE_FORMAT"] = "%a, %e. %b";

Calendar._TT["WK"] = "tД‚ЛќД№Дѕ";
