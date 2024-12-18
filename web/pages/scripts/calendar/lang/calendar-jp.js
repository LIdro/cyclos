// ** I18N

// Calendar JP language
// Author: ???
// Encoding: utf-8
// Distributed under the same terms as the calendar itself.

// For translators: please use UTF-8 if possible.  We strongly believe that
// Unicode is the answer to a real internationalized world.  Also please
// include your contact information in the header, as can be seen above.

// full day names
Calendar._DN = new Array
("ж—Ґ",
 "жњ€",
 "зЃ«",
 "ж°ґ",
 "жњЁ",
 "й‡‘",
 "ењџ",
 "ж—Ґ");

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
Calendar._SDN = Calendar._DN;

// First day of the week. "0" means display Sunday first, "1" means display
// Monday first, etc.
Calendar._FD = 0;

// full month names
Calendar._MN = new Array
("1жњ€",
 "2жњ€",
 "3жњ€",
 "4жњ€",
 "5жњ€",
 "6жњ€",
 "7жњ€",
 "8жњ€",
 "9жњ€",
 "10жњ€",
 "11жњ€",
 "12жњ€");

// short month names
Calendar._SMN = Calendar._MN;

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "About the calendar";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"For latest version visit: http://www.dynarch.com/projects/calendar/\n" +
"Distributed under GNU LGPL.  See http://gnu.org/licenses/lgpl.html for details." +
"\n\n" +
"Date selection:\n" +
"- Use the \xab, \xbb buttons to select year\n" +
"- Use the " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " buttons to select month\n" +
"- Hold mouse button on any of the above buttons for faster selection.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"Time selection:\n" +
"- Click on any of the time parts to increase it\n" +
"- or Shift-click to decrease it\n" +
"- or click and drag for faster selection.";

Calendar._TT["PREV_YEAR"] = "е‰Ќе№ґ";
Calendar._TT["PREV_MONTH"] = "е‰Ќжњ€";
Calendar._TT["GO_TODAY"] = "д»Љж—Ґ";
Calendar._TT["NEXT_MONTH"] = "зїЊжњ€";
Calendar._TT["NEXT_YEAR"] = "зїЊе№ґ";
Calendar._TT["SEL_DATE"] = "ж—Ґд»йЃёжЉћ";
Calendar._TT["DRAG_TO_MOVE"] = "г‚¦г‚Јгѓігѓ‰г‚¦гЃ®з§»е‹•";
Calendar._TT["PART_TODAY"] = " (д»Љж—Ґ)";

// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "Display %s first";

// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
Calendar._TT["WEEKEND"] = "0,6";

Calendar._TT["CLOSE"] = "й–‰гЃг‚‹";
Calendar._TT["TODAY"] = "д»Љж—Ґ";
Calendar._TT["TIME_PART"] = "(Shift-)Click or drag to change value";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "y-mm-dd";
Calendar._TT["TT_DATE_FORMAT"] = "%mжњ€ %dж—Ґ (%a)";

Calendar._TT["WK"] = "йЂ±";
Calendar._TT["TIME"] = "Time:";
