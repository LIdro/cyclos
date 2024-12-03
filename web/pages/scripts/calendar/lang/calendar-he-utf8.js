// ** I18N

// Calendar EN language
// Author: Idan Sofer, <idan@idanso.dyndns.org>
// Encoding: UTF-8
// Distributed under the same terms as the calendar itself.

// For translators: please use UTF-8 if possible.  We strongly believe that
// Unicode is the answer to a real internationalized world.  Also please
// include your contact information in the header, as can be seen above.

// full day names
Calendar._DN = new Array
("ЧЁЧђЧ©Ч•Чџ",
 "Ч©Ч Ч™",
 "Ч©ЧњЧ™Ч©Ч™",
 "ЧЁЧ‘Ч™ЧўЧ™",
 "Ч—ЧћЧ™Ч©Ч™",
 "Ч©Ч™Ч©Ч™",
 "Ч©Ч‘ЧЄ",
 "ЧЁЧђЧ©Ч•Чџ");

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
("Чђ",
 "Ч‘",
 "Ч’",
 "Ч“",
 "Ч”",
 "Ч•",
 "Ч©",
 "Чђ");

// full month names
Calendar._MN = new Array
("Ч™Ч Ч•ЧђЧЁ",
 "Ч¤Ч‘ЧЁЧ•ЧђЧЁ",
 "ЧћЧЁЧҐ",
 "ЧђЧ¤ЧЁЧ™Чњ",
 "ЧћЧђЧ™",
 "Ч™Ч•Ч Ч™",
 "Ч™Ч•ЧњЧ™",
 "ЧђЧ•Ч’Ч•ЧЎЧ",
 "ЧЎЧ¤ЧЧћЧ‘ЧЁ",
 "ЧђЧ•Ч§ЧЧ•Ч‘ЧЁ",
 "Ч Ч•Ч‘ЧћЧ‘ЧЁ",
 "Ч“Ч¦ЧћЧ‘ЧЁ");

// short month names
Calendar._SMN = new Array
("Ч™Ч Чђ",
 "Ч¤Ч‘ЧЁ",
 "ЧћЧЁЧҐ",
 "ЧђЧ¤ЧЁ",
 "ЧћЧђЧ™",
 "Ч™Ч•Ч ",
 "Ч™Ч•Чњ",
 "ЧђЧ•Ч’",
 "ЧЎЧ¤Ч",
 "ЧђЧ•Ч§",
 "Ч Ч•Ч‘",
 "Ч“Ч¦Чћ");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "ЧђЧ•Ч“Ч•ЧЄ Ч”Ч©Ч ЧЄЧ•Чџ";

Calendar._TT["ABOUT"] =
"Ч‘Ч—ЧЁЧџ ЧЄЧђЧЁЧ™Чљ/Ч©ЧўЧ” DHTML\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"Ч”Ч’Ч™ЧЁЧЎЧђ Ч”ЧђЧ—ЧЁЧ•Ч Ч” Ч–ЧћЧ™Ч Ч” Ч‘: http://www.dynarch.com/projects/calendar/\n" +
"ЧћЧ•Ч¤ЧҐ ЧЄЧ—ЧЄ Ч–Ч™Ч›Ч™Ч•Чџ Ч” GNU LGPL.  ЧўЧ™Ч™Чџ Ч‘ http://gnu.org/licenses/lgpl.html ЧњЧ¤ЧЁЧЧ™Чќ Ч Ч•ЧЎЧ¤Ч™Чќ." +
"\n\n" +
Ч‘Ч—Ч™ЧЁЧЄ ЧЄЧђЧЁЧ™Чљ:\n" +
"- Ч”Ч©ЧЄЧћЧ© Ч‘Ч›Ч¤ЧЄЧ•ЧЁЧ™Чќ \xab, \xbb ЧњЧ‘Ч—Ч™ЧЁЧЄ Ч©Ч Ч”\n" +
"- Ч”Ч©ЧЄЧћЧ© Ч‘Ч›Ч¤ЧЄЧ•ЧЁЧ™Чќ " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " ЧњЧ‘Ч—Ч™ЧЁЧЄ Ч—Ч•Ч“Ч©\n" +
"- Ч”Ч—Ч–Ч§ Ч”ЧўЧ›Ч‘ЧЁ ЧњЧ—Ч•ЧҐ ЧћЧўЧњ Ч”Ч›Ч¤ЧЄЧ•ЧЁЧ™Чќ Ч”ЧћЧ•Ч–Ч›ЧЁЧ™Чќ ЧњЧўЧ™Чњ ЧњЧ‘Ч—Ч™ЧЁЧ” ЧћЧ”Ч™ЧЁЧ” Ч™Ч•ЧЄЧЁ.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"Ч‘Ч—Ч™ЧЁЧЄ Ч–ЧћЧџ:\n" +
"- ЧњЧ—ЧҐ ЧўЧњ Ч›Чњ ЧђЧ—Ч“ ЧћЧ—ЧњЧ§Ч™ Ч”Ч–ЧћЧџ Ч›Ч“Ч™ ЧњЧ”Ч•ЧЎЧ™ЧЈ\n" +
"- ЧђЧ• shift Ч‘Ч©Ч™ЧњЧ•Ч‘ ЧўЧќ ЧњЧ—Ч™Ч¦Ч” Ч›Ч“Ч™ ЧњЧ”Ч—ЧЎЧ™ЧЁ\n" +
"- ЧђЧ• ЧњЧ—ЧҐ Ч•Ч’ЧЁЧ•ЧЁ ЧњЧ¤ЧўЧ•ЧњЧ” ЧћЧ”Ч™ЧЁЧ” Ч™Ч•ЧЄЧЁ.";

Calendar._TT["PREV_YEAR"] = "Ч©Ч Ч” Ч§Ч•Ч“ЧћЧЄ - Ч”Ч—Ч–Ч§ ЧњЧ§Ч‘ЧњЧЄ ЧЄЧ¤ЧЁЧ™Ч";
Calendar._TT["PREV_MONTH"] = "Ч—Ч•Ч“Ч© Ч§Ч•Ч“Чќ - Ч”Ч—Ч–Ч§ ЧњЧ§Ч‘ЧњЧЄ ЧЄЧ¤ЧЁЧ™Ч";
Calendar._TT["GO_TODAY"] = "ЧўЧ‘Ч•ЧЁ ЧњЧ”Ч™Ч•Чќ";
Calendar._TT["NEXT_MONTH"] = "Ч—Ч•Ч“Ч© Ч”Ч‘Чђ - Ч”Ч—Ч–Ч§ ЧњЧЄЧ¤ЧЁЧ™Ч";
Calendar._TT["NEXT_YEAR"] = "Ч©Ч Ч” Ч”Ч‘ЧђЧ” - Ч”Ч—Ч–Ч§ ЧњЧЄЧ¤ЧЁЧ™Ч";
Calendar._TT["SEL_DATE"] = "Ч‘Ч—ЧЁ ЧЄЧђЧЁЧ™Чљ";
Calendar._TT["DRAG_TO_MOVE"] = "Ч’ЧЁЧ•ЧЁ ЧњЧ”Ч–Ч–Ч”";
Calendar._TT["PART_TODAY"] = " )Ч”Ч™Ч•Чќ(";

// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "Ч”Ч¦Ч’ %s Ч§Ч•Ч“Чќ";

// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
Calendar._TT["WEEKEND"] = "6";

Calendar._TT["CLOSE"] = "ЧЎЧ’Ч•ЧЁ";
Calendar._TT["TODAY"] = "Ч”Ч™Ч•Чќ";
Calendar._TT["TIME_PART"] = "(Ч©Ч™Ч¤Ч-)ЧњЧ—ЧҐ Ч•Ч’ЧЁЧ•ЧЁ Ч›Ч“Ч™ ЧњЧ©Ч Ч•ЧЄ ЧўЧЁЧљ";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%Y-%m-%d";
Calendar._TT["TT_DATE_FORMAT"] = "%a, %b %e";

Calendar._TT["WK"] = "wk";
Calendar._TT["TIME"] = "Ч©ЧўЧ”::";
