/* 
	calendar-cs-win.js
	language: Czech
	encoding: windows-1250
	author: Lubos Jerabek (xnet@seznam.cz)
	        Jan Uhlir (espinosa@centrum.cz)
*/

// ** I18N
Calendar._DN  = new Array('NedД›le','PondД›lГ­','ГљterГЅ','StЕ™eda','ДЊtvrtek','PГЎtek','Sobota','NedД›le');
Calendar._SDN = new Array('Ne','Po','Гљt','St','ДЊt','PГЎ','So','Ne');
Calendar._MN  = new Array('Leden','Гљnor','BЕ™ezen','Duben','KvД›ten','ДЊerven','ДЊervenec','Srpen','ZГЎЕ™Г­','ЕГ­jen','Listopad','Prosinec');
Calendar._SMN = new Array('Led','Гљno','BЕ™e','Dub','KvД›','ДЊrv','ДЊvc','Srp','ZГЎЕ™','ЕГ­j','Lis','Pro');

//First day of the week. "0" means display Sunday first, "1" means display
//Monday first, etc.
Calendar._FD = 0;

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "O komponentД› kalendГЎЕ™";
Calendar._TT["TOGGLE"] = "ZmД›na prvnГ­ho dne v tГЅdnu";
Calendar._TT["PREV_YEAR"] = "PЕ™edchozГ­ rok (pЕ™idrЕѕ pro menu)";
Calendar._TT["PREV_MONTH"] = "PЕ™edchozГ­ mД›sГ­c (pЕ™idrЕѕ pro menu)";
Calendar._TT["GO_TODAY"] = "DneЕЎnГ­ datum";
Calendar._TT["NEXT_MONTH"] = "DalЕЎГ­ mД›sГ­c (pЕ™idrЕѕ pro menu)";
Calendar._TT["NEXT_YEAR"] = "DalЕЎГ­ rok (pЕ™idrЕѕ pro menu)";
Calendar._TT["SEL_DATE"] = "Vyber datum";
Calendar._TT["DRAG_TO_MOVE"] = "ChyЕҐ a tГЎhni, pro pЕ™esun";
Calendar._TT["PART_TODAY"] = " (dnes)";
Calendar._TT["MON_FIRST"] = "UkaЕѕ jako prvnГ­ PondД›lГ­";
//Calendar._TT["SUN_FIRST"] = "UkaЕѕ jako prvnГ­ NedД›li";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"For latest version visit: http://www.dynarch.com/projects/calendar/\n" +
"Distributed under GNU LGPL.  See http://gnu.org/licenses/lgpl.html for details." +
"\n\n" +
"VГЅbД›r datumu:\n" +
"- Use the \xab, \xbb buttons to select year\n" +
"- PouЕѕijte tlaДЌГ­tka " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " k vГЅbД›ru mД›sГ­ce\n" +
"- PodrЕѕte tlaДЌГ­tko myЕЎi na jakГ©mkoliv z tД›ch tlaДЌГ­tek pro rychlejЕЎГ­ vГЅbД›r.";

Calendar._TT["ABOUT_TIME"] = "\n\n" +
"VГЅbД›r ДЌasu:\n" +
"- KliknД›te na jakoukoliv z ДЌГЎstГ­ vГЅbД›ru ДЌasu pro zvГЅЕЎenГ­.\n" +
"- nebo Shift-click pro snГ­ЕѕenГ­\n" +
"- nebo kliknД›te a tГЎhnД›te pro rychlejЕЎГ­ vГЅbД›r.";

// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "Zobraz %s prvnГ­";

// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
Calendar._TT["WEEKEND"] = "0,6";

Calendar._TT["CLOSE"] = "ZavЕ™Г­t";
Calendar._TT["TODAY"] = "Dnes";
Calendar._TT["TIME_PART"] = "(Shift-)Klikni nebo tГЎhni pro zmД›nu hodnoty";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "d.m.yy";
Calendar._TT["TT_DATE_FORMAT"] = "%a, %b %e";

Calendar._TT["WK"] = "wk";
Calendar._TT["TIME"] = "ДЊas:";
