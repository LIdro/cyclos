// ** I18N

// Calendar LV language
// Author: Juris Valdovskis, <juris@dc.lv>
// Encoding: cp1257
// Distributed under the same terms as the calendar itself.

// For translators: please use UTF-8 if possible.  We strongly believe that
// Unicode is the answer to a real internationalized world.  Also please
// include your contact information in the header, as can be seen above.

// full day names
Calendar._DN = new Array
("Svзtdiena",
 "Pirmdiena",
 "Otrdiena",
 "Treрdiena",
 "Ceturdiena",
 "Piektdiena",
 "Sestdiena",
 "Svзtdiena");

// Please note that the following array of short day names (and the same goes
// for short month names, _SMN) isn't absolutely necessary.  We give it here
// for exemplification on how one can customize the short day names, but if
// they are simply the first N letters of the full name you can simply say:
//
//   Calendar._SDN_len = N; // short day name length
//   Calendar._SMN_len = N; // short month name length
//
// If N = 3 then this is not needed either since we assume a value of 3 if not
// present, to be compatible with translation files that were written before
// this feature.

// short day names
Calendar._SDN = new Array
("Sv",
 "Pr",
 "Ot",
 "Tr",
 "Ce",
 "Pk",
 "Se",
 "Sv");

// full month names
Calendar._MN = new Array
("Janvвris",
 "Februвris",
 "Marts",
 "Aprоlis",
 "Maijs",
 "Jыnijs",
 "Jыlijs",
 "Augusts",
 "Septembris",
 "Oktobris",
 "Novembris",
 "Decembris");

// short month names
Calendar._SMN = new Array
("Jan",
 "Feb",
 "Mar",
 "Apr",
 "Mai",
 "Jыn",
 "Jыl",
 "Aug",
 "Sep",
 "Okt",
 "Nov",
 "Dec");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "Par kalendвru";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"For latest version visit: http://www.dynarch.com/projects/calendar/\n" +
"Distributed under GNU LGPL.  See http://gnu.org/licenses/lgpl.html for details." +
"\n\n" +
"Datuma izvзle:\n" +
"- Izmanto \xab, \xbb pogas, lai izvзlзtos gadu\n" +
"- Izmanto " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + "pogas, lai izvзlзtos mзnesi\n" +
"- Turi nospiestu peles pogu uz jebkuru no augstвk minзtajвm pogвm, lai paвtrinвtu izvзli.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"Laika izvзle:\n" +
"- Uzklikрнini uz jebkuru no laika daпвm, lai palielinвtu to\n" +
"- vai Shift-klikрнis, lai samazinвtu to\n" +
"- vai noklikрнini un velc uz attiecоgo virzienu lai mainоtu вtrвk.";

Calendar._TT["PREV_YEAR"] = "Iepr. gads (turi izvзlnei)";
Calendar._TT["PREV_MONTH"] = "Iepr. mзnesis (turi izvзlnei)";
Calendar._TT["GO_TODAY"] = "Рodien";
Calendar._TT["NEXT_MONTH"] = "Nвkoрais mзnesis (turi izvзlnei)";
Calendar._TT["NEXT_YEAR"] = "Nвkoрais gads (turi izvзlnei)";
Calendar._TT["SEL_DATE"] = "Izvзlies datumu";
Calendar._TT["DRAG_TO_MOVE"] = "Velc, lai pвrvietotu";
Calendar._TT["PART_TODAY"] = " (рodien)";

// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "Attзlot %s kв pirmo";

// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
Calendar._TT["WEEKEND"] = "1,7";

Calendar._TT["CLOSE"] = "Aizvзrt";
Calendar._TT["TODAY"] = "Рodien";
Calendar._TT["TIME_PART"] = "(Shift-)Klikрнis vai pвrvieto, lai mainоtu";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%d-%m-%Y";
Calendar._TT["TT_DATE_FORMAT"] = "%a, %e %b";

Calendar._TT["WK"] = "wk";
Calendar._TT["TIME"] = "Laiks:";
